import { Repo } from '../Model/Repo';

export interface FindReposDTO {
  username: string;
  filters: {
    page: number;
    per_page: number;
  };
}

export interface IRepoRepository {
  findRepos(data: FindReposDTO): Promise<Repo[]>;
}
