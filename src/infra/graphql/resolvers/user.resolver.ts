import { returnUser } from '@/common/functions/resolvers/schemas-funciotions';
import { UserService } from '@/modules/user/service/user.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUser } from '../interfaces';
import { User as UserModel } from '@/common/models';

@Resolver(returnUser)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(returnUser)
  async createUser(@Args('data') data: CreateUser): Promise<UserModel> {
    return this.userService.create(data);
  }
}
