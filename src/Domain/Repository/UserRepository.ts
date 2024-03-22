import { User } from '../Model/User';

export interface UserRepository {
  findUserByUsername(username: string): Promise<User>;
}
