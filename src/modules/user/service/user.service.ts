import { User } from '@/common/models';
import { CreateUser } from '@/infra/graphql/interfaces';
import { UserRepositoryService } from '@/repository/services/user-repository.service';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryService) {}

  async create({ name, email, driver_license, password }: CreateUser): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error('User Already Exists!');
    }

    const passwordHash = await hash(password, 8);

    return this.userRepository.createUser({
      name,
      email,
      driver_license,
      password: passwordHash,
    });
  }
}
