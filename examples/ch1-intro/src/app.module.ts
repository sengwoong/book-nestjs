import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  //nest g co Api
  controllers: [ApiController,AppController],
  providers: [AppService],
})
export class AppModule {}
