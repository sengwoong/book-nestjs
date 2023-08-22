import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// npm i --save doteenv
//npm i --save-dev @types/dotenv
//.development.env
//DATABASE_HOST=local

//.stage.env
//DATABASE_HOST=stage-reader.dextto.com

//.development.env
//DATABASE_HOST=product-reader.dextto.com


// "start:dev": "npm run prebuild && NODE_ENV=development nest start --watch",
// "start:debug": "nest start --debug --watch",

//npm i --save @nestjs/config

//forRoot 나 register 로 사용한다
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env'
      : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
