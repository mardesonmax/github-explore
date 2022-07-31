import React from 'react';
import { Header } from '~/components/header';
import { Search } from '~/components/search';
import { FaChevronRight } from 'react-icons/fa';

import { useUser } from '~/hooks/user';
import { Container, Content, ContentHeader, Cards, Card } from './styles';

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
            <Card to={`user?username=${user.login}`} key={user.id}>
              <div className="avatar">
                <img src={user.avatar_url} alt="Avatar" />
              </div>

              <div className="details">
                <h2>{user.name}</h2>
                <p>{user.login}</p>
              </div>

              <div className="icon">
                <FaChevronRight />
              </div>
            </Card>
          ))}
        </Cards>
      </Content>
    </Container>
  );
};
