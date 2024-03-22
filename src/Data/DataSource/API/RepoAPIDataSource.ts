import { Repo } from '~/Domain/Model/Repo';
import { FindReposDTO } from '~/Domain/Repository/RepoRepository';
import { RepoDataSource } from '../RepoDataSource';
import { client } from './client';

export class RepoAPIDataSource implements RepoDataSource {
  async findRepos({ username, filters }: FindReposDTO): Promise<Repo[]> {
    const { data } = await client.get<Repo[]>(`users/${username}/repos`, {
      params: filters,
    });

    return data;
  }
}
