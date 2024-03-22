import { User } from '~/Domain/Model/User';

export interface UserDataSource {
  findUserByUsername(username: string): Promise<User>;
}
