import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home';
import { theme } from './styles/theme';

import GlobalStyles from './styles/global';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Home />

    <GlobalStyles />
  </ThemeProvider>
);
