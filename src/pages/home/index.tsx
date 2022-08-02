import React from 'react';
import { Header } from '~/components/header';
import { Search } from '~/components/search';

import { useUser } from '~/hooks/user';
import { Card } from '~/components/card';
import { Link } from 'react-router-dom';
import { Container, Content, ContentHeader, Cards } from './styles';

export const Home: React.FC = () => {
  const { users } = useUser();
  return (
    <Container>
      <Header />

      <Content>
        <ContentHeader>
          <h1>
            Explore repositórios <br />
            no Github.
          </h1>

          <Search />
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
