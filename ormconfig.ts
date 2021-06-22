import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'local.env' });

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRESS_HOST || 'localhost',
  port: +process.env.POSTGRESS_PORT || 5432,
  username: process.env.POSTGRESS_USER || 'docker',
  password: process.env.POSTGRESS_PASSWORD || 'ignite',
  database: process.env.POSTGRESS_DATABASE || 'rentx',
  entities: [__dirname + '/src/**/*.entity.{js,ts}'],
  migrations: [__dirname + '/src/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: __dirname + '/src/infra/typeorm/migrations/',
  },
};

export default config;
