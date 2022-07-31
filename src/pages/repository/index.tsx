import React, { useEffect, useRef, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { useTheme } from 'styled-components';
import { Header } from '~/components/header';
import { IssuesDTO } from '~/dtos/issues-dto';
import { RepositoryDTO } from '~/dtos/repository-dto';
import { api } from '~/services/api';

import { Container, Content, ContentHeader, Cards, Card } from './styles';

export const Repository: React.FC = () => {
  const loadingRef = useRef<LoadingBarRef>(null);
  const [searchParams] = useSearchParams();
  const [repository, setRepository] = useState<RepositoryDTO>();
  const [issues, setIssues] = useState<IssuesDTO[]>([]);
  const { colors } = useTheme();

  useEffect(() => {
    (async () => {
      try {
        loadingRef.current?.continuousStart(0, 100);
        const repositoryName = searchParams.get('repo');

        const [repositoryResult, issuesResult] = await Promise.all([
          api.get<RepositoryDTO>(`repos/${repositoryName}`),
          api.get<IssuesDTO[]>(`repos/${repositoryName}/issues`),
        ]);

        setRepository(repositoryResult.data);
        setIssues(issuesResult.data);
        loadingRef.current?.complete();
      } catch {
        Promise.reject();
      }
    })();
  }, [searchParams]);

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
          </Content>
        )}
      </Container>
    </>
  );
};
