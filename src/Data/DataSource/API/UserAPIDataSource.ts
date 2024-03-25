import { User } from '~/Domain/Model/User';
import { IUserDataSource } from '../IUserDataSource';
import { client } from './client';

export class UserAPIDataSource implements IUserDataSource {
  async findUserByUsername(username: string): Promise<User> {
    const { data } = await client.get<User>(`users/${username}`);

    return data;
  }
}
