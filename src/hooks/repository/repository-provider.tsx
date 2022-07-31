import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { RepositoryDTO } from '~/dtos/repository-dto';
import { api } from '~/services/api';

type Repository = {
  id: string;
  fullName: string;
  avatarUrl: string;
  description?: string;
};

type RepositoryContextProps = {
  repositories: Repository[];
  setRepositories: React.Dispatch<React.SetStateAction<Repository[]>>;
  search(search: string): Promise<void>;
};

export const RepositoryContext = createContext<RepositoryContextProps>(
  {} as RepositoryContextProps,
);

type Props = {
  children: ReactNode;
};

export const RepositoryProvider: React.FC<Props> = ({ children }) => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localRepo = localStorage.getItem('@github-explorer-repo');

    if (localRepo) {
      return JSON.parse(localRepo) as Repository[];
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@github-explorer-repo', JSON.stringify(repositories));
  }, [repositories]);

  const search = useCallback(async (repository: string) => {
    const { data } = await api.get<RepositoryDTO>(`repos/${repository}`);

    setRepositories(previewsState => [
      {
        id: data.id,
        avatarUrl: data.owner.avatar_url,
        fullName: data.full_name,
        description: data.description,
      },
      ...previewsState,
    ]);
  }, []);

  const values = useMemo(
    () => ({
      repositories,
      setRepositories,
      search,
    }),
    [repositories, setRepositories, search],
  );

  return (
    <RepositoryContext.Provider value={values}>
      {children}
    </RepositoryContext.Provider>
  );
};
