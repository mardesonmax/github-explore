import { Repo } from '~/Domain/Model/Repo';
import {
  FindReposDTO,
  IRepoRepository,
} from '~/Domain/Repository/IRepoRepository';
import { inject, injectable } from 'tsyringe';
import { IRepoDataSource } from '../DataSource/IRepoDataSource';

@injectable()
export class RepoRepositoryImpl implements IRepoRepository {
  constructor(
    @inject('RepoDataSource')
    private repoDataSource: IRepoDataSource,
  ) {}

  findRepos(data: FindReposDTO): Promise<Repo[]> {
    return this.repoDataSource.findRepos(data);
  }
}
