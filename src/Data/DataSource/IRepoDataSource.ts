import { Repo } from '~/Domain/Model/Repo';
import { FindReposDTO } from '~/Domain/Repository/IRepoRepository';

export interface IRepoDataSource {
  findRepos(data: FindReposDTO): Promise<Repo[]>;
}
