import React from 'react';
import { Header } from '~/components/header';
import { Search } from '~/components/search';
import { FaChevronRight } from 'react-icons/fa';

import { useRepository } from '~/hooks/repository';
import { createPath, createSearchParams } from 'react-router-dom';
import { Container, Content, ContentHeader, Cards, Card } from './styles';

export const Home: React.FC = () => {
  const { repositories } = useRepository();
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
          {repositories.map(repository => (
            <Card
              to={`repository?repo=${repository.fullName.trim()}`}
              key={repository.id}
            >
              <div className="avatar">
                <img src={repository.avatarUrl} alt="Avatar" />
              </div>

              <div className="details">
                <h2>{repository.fullName}</h2>
                {repository.description && <p>{repository.description}</p>}
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
