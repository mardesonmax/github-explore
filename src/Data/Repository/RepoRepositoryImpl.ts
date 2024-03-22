import { Repo } from '~/Domain/Model/Repo';
import {
  FindReposDTO,
  RepoRepository,
} from '~/Domain/Repository/RepoRepository';
import { RepoAPIDataSource } from '../DataSource/API/RepoAPIDataSource';

export class RepoDataSourceImpl implements RepoRepository {
  constructor(private repoDataSource: RepoAPIDataSource) {}

  findRepos(data: FindReposDTO): Promise<Repo[]> {
    return this.repoDataSource.findRepos(data);
  }
}
