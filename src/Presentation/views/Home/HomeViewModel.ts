import { useCallback, useEffect, useState } from 'react';
import { container } from 'tsyringe';
import { User } from '~/Domain/Model/User';
import { FindUserUseCase } from '~/Domain/UseCases/User/FindUserUseCase';

const findUserUseCase = container.resolve(FindUserUseCase);

export function useHomeViewModel() {
  const [users, setUsers] = useState<User[]>(() => {
    const localRepo = localStorage.getItem('@github-explorer-repo');

    if (localRepo) {
      return JSON.parse(localRepo) as User[];
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@github-explorer-repo', JSON.stringify(users));
  }, [users]);

  const search = useCallback(
    async (username: string) => {
      const response = await findUserUseCase.execute(username);

      const repositoryExists = users.findIndex(
        repoFind => repoFind.id === response.id,
      );

      if (repositoryExists !== -1) {
        users.splice(repositoryExists, 1);
      }

      setUsers(previewsState => [response, ...previewsState]);
    },
    [users],
  );

  return {
    users,
    search,
  };
}
