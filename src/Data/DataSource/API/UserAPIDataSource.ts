import { User } from '~/Domain/Model/User';
import { UserDataSource } from '../UserDataSource';
import { client } from './client';

export class UserAPIDataSource implements UserDataSource {
  async findUserByUsername(username: string): Promise<User> {
    const { data } = await client.get<User>(`users/${username}`);

    return data;
  }
}
