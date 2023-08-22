import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { Logger2Middleware } from './logger/logger2.middleware';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'; // TypeOrmModule을 추가해주세요
import { UserEntity } from './users/entities/user.entity';
import { Migration } from 'typeorm';
//npm i typeorm@0.3.7 @nestjs/typeorm@9.0.0 mysql2

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port:3306,
      username:"root",
      password:"test",
      database:"User",
      // entities:[__dirname+'/**/*.entity[.ts,.js]'],
      synchronize:true,
      //스키마동기하여부
     migrations: [__dirname + '/**/*.migrations/*.js'], // Array of migration files
      migrationsTableName: 'migrations', // Name of the migration table
      //npm run typeorm migration:create src/migrations/CreateUser
      //이떄 generate 는 자동생성
      entities:[UserEntity]
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware, Logger2Middleware)
      .forRoutes(UsersController);
  }
}
