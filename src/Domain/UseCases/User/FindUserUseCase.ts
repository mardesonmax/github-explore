import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '~/Domain/Repository/IUserRepository';

@injectable()
export class FindUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(username: string) {
    return this.userRepository.findUserByUsername(username);
  }
}
