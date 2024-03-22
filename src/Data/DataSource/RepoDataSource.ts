import { Repo } from '~/Domain/Model/Repo';
import { FindReposDTO } from '~/Domain/Repository/RepoRepository';

export interface RepoDataSource {
  findRepos(data: FindReposDTO): Promise<Repo[]>;
}
