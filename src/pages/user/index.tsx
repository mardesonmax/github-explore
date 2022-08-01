import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import { useTheme } from 'styled-components';
import { Header } from '~/components/header';
import ReactLoading from 'react-loading';
import { api } from '~/services/api';

import { UserDTO } from '~/dtos/user-dto';
import { RepoDTO } from '~/dtos/repo-dto';
import { Container, Content, ContentHeader, Cards, Card } from './styles';

let pageIn = 1;
let pageOf = 1;
let inLoading = false;
const perPage = 20;

export const User: React.FC = () => {
  const loadingRef = useRef<LoadingBarRef>(null);
  const [user, setUser] = useState<UserDTO>();
  const [repositories, setRepositories] = useState<RepoDTO[]>([]);
  const [isLoadingRepo, setIsLoadingRepo] = useState(false);

  const { colors } = useTheme();

  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');

  const handleGetRepository = useCallback(
    async (page = 1): Promise<AxiosResponse<RepoDTO[]> | any> => {
      try {
        setIsLoadingRepo(true);
        const result = await api.get<RepoDTO[]>(`/users/${username}/repos`, {
          params: {
            page,
            per_page: perPage,
          },
        });

        setIsLoadingRepo(false);
        return result;
      } catch {
        setIsLoadingRepo(false);
      }

      return Promise.reject();
    },
    [username],
  );

  useEffect(() => {
    (async () => {
      try {
        loadingRef.current?.continuousStart(0, 100);

        const [userResult, issuesResult] = await Promise.all([
          api.get<UserDTO>(`/users/${username}`),
          handleGetRepository(),
        ]);

        setUser(userResult.data);
        setRepositories(issuesResult.data);
        pageOf = userResult.data.public_repos / perPage;
        loadingRef.current?.complete();
      } catch {
        loadingRef.current?.complete();
        Promise.reject();
      }
    })();
  }, [username, handleGetRepository]);

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
        pageIn += 1;
        const result = await handleGetRepository(pageIn);

        if (result) {
          setRepositories(state => [...state, ...result.data]);
        }
        inLoading = false;
      }
    },
    [handleGetRepository],
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

        {user && (
          <Content>
            <ContentHeader>
              <div className="repo-info">
                <div className="avatar">
                  <img src={user.avatar_url} alt="" />
                </div>

                <div className="details">
                  <h2>{user.name}</h2>

                  {user.login && <p>{user.login}</p>}
                </div>
              </div>

              <div className="repo-numbers">
                <div className="item">
                  <span>{user.following}</span>
                  <p>Seguindo</p>
                </div>
                <div className="item">
                  <span>{user.followers}</span>
                  <p>Seguidores</p>
                </div>
                <div className="item">
                  <span>{user.public_repos}</span>
                  <p>Repositórios</p>
                </div>
              </div>
            </ContentHeader>

            <Cards>
              {repositories.map(repository => (
                <Card key={repository.id}>
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="item">
                      <h2>{repository.name}</h2>
                      <p>{repository.description}</p>
                    </div>

                    <div className="icon">
                      <FaChevronRight />
                    </div>
                  </a>
                </Card>
              ))}
            </Cards>

            {isLoadingRepo && (
              <div className="loading-repositories">
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
