import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { UserDTO } from '~/dtos/user-dto';
import { api } from '~/services/api';

type UserContextProps = {
  users: UserDTO[];
  setUsers: React.Dispatch<React.SetStateAction<UserDTO[]>>;
  search(search: string): Promise<void>;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);

type Props = {
  children: ReactNode;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<UserDTO[]>(() => {
    const localRepo = localStorage.getItem('@github-explorer-repo');

    if (localRepo) {
      return JSON.parse(localRepo) as UserDTO[];
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@github-explorer-repo', JSON.stringify(users));
  }, [users]);

  const search = useCallback(
    async (username: string) => {
      const { data } = await api.get<UserDTO>(`users/${username}`);

      const repositoryExists = users.findIndex(
        repoFind => repoFind.id === data.id,
      );

      if (repositoryExists !== -1) {
        users.splice(repositoryExists, 1);
      }

      setUsers(previewsState => [data, ...previewsState]);
    },
    [users],
  );

  const values = useMemo(
    () => ({
      users,
      setUsers,
      search,
    }),
    [users, setUsers, search],
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
