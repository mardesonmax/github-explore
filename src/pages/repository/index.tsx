import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { useTheme } from 'styled-components';
import { Header } from '~/components/header';
import { IssuesDTO } from '~/dtos/issues-dto';
import { RepositoryDTO } from '~/dtos/repository-dto';
import ReactLoading from 'react-loading';
import { api } from '~/services/api';

import { Container, Content, ContentHeader, Cards, Card } from './styles';

let pageIn = 1;
let pageOf = 1;
let inLoading = false;
const perPage = 40;

export const Repository: React.FC = () => {
  const loadingRef = useRef<LoadingBarRef>(null);
  const [repository, setRepository] = useState<RepositoryDTO>();
  const [issues, setIssues] = useState<IssuesDTO[]>([]);
  const [isLoadingIssues, setIsLoadingIssues] = useState(false);

  const { colors } = useTheme();

  const [searchParams] = useSearchParams();
  const repositoryName = searchParams.get('repo');

  const handleGetIssues = useCallback(
    async (page = 1): Promise<AxiosResponse<IssuesDTO[]> | any> => {
      try {
        setIsLoadingIssues(true);
        const result = await api.get<IssuesDTO[]>(
          `repos/${repositoryName}/issues`,
          {
            params: {
              page,
              per_page: perPage,
            },
          },
        );

        pageIn = page;
        setIsLoadingIssues(false);
        return result;
      } catch {
        setIsLoadingIssues(false);
      }

      return Promise.reject();
    },
    [repositoryName],
  );

  useEffect(() => {
    (async () => {
      try {
        loadingRef.current?.continuousStart(0, 100);

        const [repositoryResult, issuesResult] = await Promise.all([
          api.get<RepositoryDTO>(`repos/${repositoryName}`),
          handleGetIssues(),
        ]);

        setRepository(repositoryResult.data);
        setIssues(issuesResult.data);
        pageOf = repositoryResult.data.open_issues / 10;
        loadingRef.current?.complete();
      } catch {
        Promise.reject();
      }
    })();
  }, [repositoryName, handleGetIssues]);

  const handleScroll = useCallback(
    async (e: Event) => {
      const { innerHeight } = e.currentTarget as Window;
      const { scrollTop } = (e.target as Document).documentElement;
      const { scrollHeight } = (e.target as Document).documentElement;

      if (
        innerHeight + scrollTop + 1 >= scrollHeight &&
        pageIn < pageOf &&
        !inLoading
      ) {
        inLoading = true;
        const result = await handleGetIssues(pageIn + 1);

        inLoading = false;
        if (result) {
          setIssues(state => [...state, ...result.data]);
        }
      }
    },
    [handleGetIssues],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <LoadingBar
        color={colors['green-200']}
        ref={loadingRef}
        shadow
        height={4}
      />
      <Container>
        <Header isGoBack />

        {repository && (
          <Content>
            <ContentHeader>
              <div className="repo-info">
                <div className="avatar">
                  <img src={repository.owner.avatar_url} alt="" />
                </div>

                <div className="details">
                  <h2>{repository.full_name}</h2>

                  {repository.description && <p>{repository.description}</p>}
                </div>
              </div>

              <div className="repo-numbers">
                <div className="item">
                  <span>{repository.watchers}</span>
                  <p>Stars</p>
                </div>
                <div className="item">
                  <span>{repository.forks}</span>
                  <p>Forks</p>
                </div>
                <div className="item">
                  <span>{repository.open_issues}</span>
                  <p>Issues abertas</p>
                </div>
              </div>
            </ContentHeader>

            <Cards>
              {issues.map(issue => (
                <Card key={issue.id}>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="item">
                      <h2>{issue.title}</h2>
                      <p>{issue.user.login}</p>
                    </div>

                    <div className="icon">
                      <FaChevronRight />
                    </div>
                  </a>
                </Card>
              ))}
            </Cards>

            {isLoadingIssues && (
              <div className="loading-issues">
                <ReactLoading
                  type="spin"
                  color={colors['green-200']}
                  height="40px"
                  width="40px"
                />
              </div>
            )}
          </Content>
        )}
      </Container>
    </>
  );
};
