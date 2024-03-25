import { Repo } from '~/Domain/Model/Repo';
import { FindReposDTO } from '~/Domain/Repository/IRepoRepository';

import { client } from './client';
import { IRepoDataSource } from '../IRepoDataSource';

export class RepoAPIDataSource implements IRepoDataSource {
  async findRepos({ username, filters }: FindReposDTO): Promise<Repo[]> {
    const { data } = await client.get<Repo[]>(`users/${username}/repos`, {
      params: filters,
    });

    return data;
  }
}
