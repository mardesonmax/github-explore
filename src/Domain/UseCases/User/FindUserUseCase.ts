import { UserRepository } from '~/Domain/Repository/UserRepository';

export class FindUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(username: string) {
    return this.userRepository.findUserByUsername(username);
  }
}
