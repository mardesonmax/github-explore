import {
  FindReposDTO,
  RepoRepository,
} from '~/Domain/Repository/RepoRepository';

export class FindReposUseCase {
  constructor(private userRepoRepository: RepoRepository) {}

  async execute(data: FindReposDTO) {
    return this.userRepoRepository.findRepos(data);
  }
}
