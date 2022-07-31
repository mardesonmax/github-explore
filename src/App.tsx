import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import GlobalStyles from './styles/global';
import { Routers } from './routers';
import { Hooks } from './hooks';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Hooks>
      <Routers />
    </Hooks>

    <GlobalStyles />
  </ThemeProvider>
);
