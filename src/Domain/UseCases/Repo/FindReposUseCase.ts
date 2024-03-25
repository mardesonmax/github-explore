import { inject, injectable } from 'tsyringe';
import {
  FindReposDTO,
  IRepoRepository,
} from '~/Domain/Repository/IRepoRepository';

@injectable()
export class FindReposUseCase {
  constructor(
    @inject('RepoRepository')
    private repoRepository: IRepoRepository,
  ) {}

  async execute(data: FindReposDTO) {
    return this.repoRepository.findRepos(data);
  }
}
