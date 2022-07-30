import React from 'react';
import { Header } from '~/components/header';

import { Container, Content, ContentHeader, Cards, Card } from './styles';

export const Repository: React.FC = () => {
  return (
    <Container>
      <Header isGoBack />

      <Content>
        <ContentHeader>
          <div className="repo-info">
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
          </div>

          <div className="repo-numbers">
            <div className="item">
              <span>1808</span>
              <p>Stars</p>
            </div>
            <div className="item">
              <span>48</span>
              <p>Forks</p>
            </div>
            <div className="item">
              <span>67</span>
              <p>Issues abertas</p>
            </div>
          </div>
        </ContentHeader>

        <Cards>
          <Card>
            <h2>mardesonmax/repo</h2>
            <p>Descrição do repo</p>
          </Card>
          <Card>
            <h2>mardesonmax/repo</h2>
            <p>Descrição do repo</p>
          </Card>
          <Card>
            <h2>mardesonmax/repo</h2>
            <p>Descrição do repo</p>
          </Card>
        </Cards>
      </Content>
    </Container>
  );
};
