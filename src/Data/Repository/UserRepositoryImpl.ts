import { User } from '~/Domain/Model/User';
import { UserRepository } from '~/Domain/Repository/UserRepository';
import { UserDataSource } from '../DataSource/UserDataSource';

export class UserDataSourceImpl implements UserRepository {
  constructor(private userDataSource: UserDataSource) {}

  findUserByUsername(username: string): Promise<User> {
    return this.userDataSource.findUserByUsername(username);
  }
}
