import React from 'react';
import { Header } from '~/components/header';
import { Search } from '~/components/search';
import { FaChevronRight } from 'react-icons/fa';

import { Container, Content, ContentHeader, Cards, Card } from './styles';

export const Home: React.FC = () => (
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
        <Card to="/repository">
          <div className="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/45460698?v=4"
              alt=""
            />
          </div>

          <div className="details">
            <h2>mardesonmax/repo</h2>
            <p>Descrição do repo</p>
          </div>

          <div className="icon">
            <FaChevronRight />
          </div>
        </Card>
      </Cards>
    </Content>
  </Container>
);
