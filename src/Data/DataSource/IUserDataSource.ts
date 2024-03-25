import { User } from '~/Domain/Model/User';

export interface IUserDataSource {
  findUserByUsername(username: string): Promise<User>;
}
