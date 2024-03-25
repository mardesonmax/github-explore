import { container } from 'tsyringe';
import { RepoAPIDataSource } from '~/Data/DataSource/API/RepoAPIDataSource';
import { UserAPIDataSource } from '~/Data/DataSource/API/UserAPIDataSource';
import { IRepoDataSource } from '~/Data/DataSource/IRepoDataSource';
import { IUserDataSource } from '~/Data/DataSource/IUserDataSource';
import { RepoRepositoryImpl } from '~/Data/Repository/RepoRepositoryImpl';
import { UserRepositoryImpl } from '~/Data/Repository/UserRepositoryImpl';
import { IRepoRepository } from '~/Domain/Repository/IRepoRepository';
import { IUserRepository } from '~/Domain/Repository/IUserRepository';

container.registerSingleton<IRepoDataSource>(
  'RepoDataSource',
  RepoAPIDataSource,
);

container.registerSingleton<IUserDataSource>(
  'UserDataSource',
  UserAPIDataSource,
);

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepositoryImpl,
);
container.registerSingleton<IRepoRepository>(
  'RepoRepository',
  RepoRepositoryImpl,
);
