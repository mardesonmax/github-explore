import React, { ReactNode } from 'react';
import { UserProvider } from './user/user-provider';

type Props = {
  children: ReactNode;
};

export const Hooks: React.FC<Props> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
