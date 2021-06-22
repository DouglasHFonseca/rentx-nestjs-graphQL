import { Module } from '@nestjs/common';
import { env } from 'process';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfigFactory } from './config/typeormConfig.factory';
import { ApiStatusModule } from './api-status/api-status.module';
import { LoggerModule } from './modules/logger/logger.module';
import { ApiStatusService } from './api-status/api-status.service';
import { Logger } from './modules/logger/logger.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GraphQLError } from 'graphql';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => typeOrmConfigFactory(),
      inject: [ConfigService],
    }),
    ApiStatusModule,
    LoggerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError = {
          statusCode: error.extensions?.exception?.status,
          message:
            error.extensions?.exception?.response?.message ||
            error?.extensions?.exception?.stacktrace?.[0] ||
            '-',
          code:
            error.extensions?.exception?.response?.code || error.extensions?.code || '-',
        };
        return graphQLFormattedError;
      },
      fieldResolverEnhancers: ['guards'],
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
  controllers: [AppController],
  providers: [ApiStatusService, Logger],
})
export class AppModule {}
