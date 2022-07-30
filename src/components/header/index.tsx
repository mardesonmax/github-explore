import React from 'react';

import { Container, Content } from './styles';

import Logo from '../../assets/svg/logo.svg';

export const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="Github Explorer" />
    </Content>
  </Container>
);
