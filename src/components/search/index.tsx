import React from 'react';

import { Container } from './styles';

export const Search: React.FC = () => (
  <Container>
    <input type="text" placeholder="Digite aqui" />
    <button type="button">Pesquisar</button>
  </Container>
);
