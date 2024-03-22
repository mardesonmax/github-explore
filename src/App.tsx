import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '~/Presentation/styles/global';
import { theme } from './Presentation/styles/theme';
import { Routers } from './Presentation/routers';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routers />

    <GlobalStyles />
  </ThemeProvider>
);
