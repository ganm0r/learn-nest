import { Injectable } from '@nestjs/common';

type IUser = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

export { UsersService, IUser };
