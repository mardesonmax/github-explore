import { useContext } from 'react';
import { RepositoryContext } from './repository-provider';

export const useRepository = () => useContext(RepositoryContext);
