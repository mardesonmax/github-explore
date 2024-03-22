import React from 'react';

import { Link } from 'react-router-dom';
import { Card } from '~/Presentation/components/card';
import { Header } from '~/Presentation/components/header';
import { Search } from '~/Presentation/components/search';
import { useHomeViewModel } from './HomeViewModel';
import { Cards, Container, Content, ContentHeader } from './styles';

export const HomeView: React.FC = () => {
  const { users, search } = useHomeViewModel();

  return (
    <Container>
      <Header />

      <Content>
        <ContentHeader>
          <h1>
            Explore repositórios <br />
            no Github.
          </h1>

          <Search search={search} />
        </ContentHeader>

        <Cards>
          {users.map(user => (
            <Link key={user.id} to={`user?username=${user.login}`}>
              <Card
                avatar={user.avatar_url}
                title={user.name}
                description={user.login}
              />
            </Link>
          ))}
        </Cards>
      </Content>
    </Container>
  );
};
