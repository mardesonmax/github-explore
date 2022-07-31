import React, { ReactNode } from 'react';
import { RepositoryProvider } from './repository/repository-provider';

type Props = {
  children: ReactNode;
};

export const Hooks: React.FC<Props> = ({ children }) => {
  return <RepositoryProvider>{children}</RepositoryProvider>;
};
