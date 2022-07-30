import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home';
import { theme } from './styles/theme';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);
