import { DbError } from '@/common/errors/error-in-db.error';
import { CreateUser } from '@/infra/graphql/interfaces/create-user.interface';
import { UserEntity } from '@/infra/typeorm/entities/user.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable();
export class UserRepositoryService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUser: CreateUser): Promise<UserEntity> {
    try {
      const user = this.userRepository.create(createUser);
      return this.userRepository.save(user);
    } catch (error) {
      Logger.error(error);
      throw new DbError('Error when add an user');
    }
  }

  async findByEmail(email: string): Promise<UserEntity> {
    try {
      return this.userRepository.findOne({ email });
    } catch (error) {
      Logger.error(error);
      throw new DbError('Error when verify if email exist');
    }
  }

  async findById(id: string): Promise<UserEntity> {
    try {
      return this.userRepository.findOne(id);
    } catch (error) {
      Logger.error(error);
      throw new DbError('Error when verify if id exist');
    }
  }
}
