import { User } from '~/Domain/Model/User';
import { IUserRepository } from '~/Domain/Repository/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { IUserDataSource } from '../DataSource/IUserDataSource';

@injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @inject('UserDataSource')
    private userDataSource: IUserDataSource,
  ) {}

  findUserByUsername(username: string): Promise<User> {
    return this.userDataSource.findUserByUsername(username);
  }
}
