/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LoadingBarRef } from 'react-top-loading-bar';
import { container } from 'tsyringe';
import { Repo } from '~/Domain/Model/Repo';
import { User } from '~/Domain/Model/User';
import { FindReposUseCase } from '~/Domain/UseCases/Repo/FindReposUseCase';
import { FindUserUseCase } from '~/Domain/UseCases/User/FindUserUseCase';

const perPage = 20;

const findReposUseCase = container.resolve(FindReposUseCase);
const findUserUseCase = container.resolve(FindUserUseCase);

export const useUserViewModel = () => {
  const loadingRef = useRef<LoadingBarRef>(null);
  const [user, setUser] = useState<User>();
  const [repositories, setRepositories] = useState<Repo[]>([]);
  const [isLoadingRepo, setIsLoadingRepo] = useState(false);
  const [page, setPage] = useState({
    in: 1,
    of: 1,
  });

  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');

  const handleGetRepository = useCallback(
    async (pageIn = 1): Promise<Repo[]> => {
      try {
        setIsLoadingRepo(true);
        const result = await findReposUseCase.execute({
          username: String(username),
          filters: {
            page: pageIn,
            per_page: perPage,
          },
        });

        setIsLoadingRepo(false);
        return result;
      } catch {
        setIsLoadingRepo(false);
      }

      return Promise.reject();
    },
    [username],
  );

  useEffect(() => {
    (async () => {
      try {
        loadingRef.current?.continuousStart(0, 100);

        const [userResult, issuesResult] = await Promise.all([
          findUserUseCase.execute(String(username)),
          handleGetRepository(),
        ]);

        setUser(userResult);
        setRepositories(issuesResult);

        const pageOf = userResult.public_repos / perPage;

        loadingRef.current?.complete();
        setPage(state => ({ ...state, of: pageOf }));
      } catch {
        loadingRef.current?.complete();
        Promise.reject();
      }
    })();
  }, [username, handleGetRepository]);

  const handleScroll = useCallback(
    async (e: Event) => {
      const { innerHeight } = e.currentTarget as Window;
      const { scrollTop } = (e.target as Document).documentElement;
      const { scrollHeight } = (e.target as Document).documentElement;

      if (
        innerHeight + scrollTop + 1 >= scrollHeight &&
        page.in < page.of &&
        !isLoadingRepo
      ) {
        const pageIn = page.in + 1;
        setPage(state => ({ ...state, in: pageIn }));
        const result = await handleGetRepository(pageIn);

        if (result) {
          setRepositories(state => [...state, ...result]);
        }
      }
    },
    [handleGetRepository, page, isLoadingRepo],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    user,
    repositories,
    loadingRef,
    isLoadingRepo,
  };
};
