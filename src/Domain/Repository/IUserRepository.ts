import { User } from '../Model/User';

export interface IUserRepository {
  findUserByUsername(username: string): Promise<User>;
}
