import { Module } from '@nestjs/common';
import { UserRepositoryService } from './services/user-repository.service';
import { UserEntity } from '@/infra/typeorm/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UserRepositoryService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserRepositoryService],
})
export class RepositoryModule {}
