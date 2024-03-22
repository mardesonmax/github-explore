/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactLoading from 'react-loading';
import LoadingBar from 'react-top-loading-bar';
import { useTheme } from 'styled-components';

import { Header } from '~/Presentation/components/header';
import { Card } from '~/Presentation/components/card';
import { useUserViewModel } from './UserViewModel';
import { Cards, Container, Content, ContentHeader } from './styles';

export const UserView: React.FC = () => {
  const { colors } = useTheme();

  const { user, repositories, loadingRef, isLoadingRepo } = useUserViewModel();

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
              {repositories?.map(repository => (
                <a
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={repository.id}
                >
                  <Card
                    title={repository.name}
                    description={repository.description}
                  />
                </a>
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
