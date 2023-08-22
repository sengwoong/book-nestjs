import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

@Module({
  //이거를 앱모듈로 들어감
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule { }
