import { UserResolver } from '@/infra/graphql/resolvers/user.resolver';
import { RepositoryModule } from '@/repository/repository.module';
import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';

@Module({
  providers: [UserService, UserResolver],
  imports: [RepositoryModule],
})
export class UserModule {}
