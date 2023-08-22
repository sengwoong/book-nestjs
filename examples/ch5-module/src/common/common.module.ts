import { Module,Global } from '@nestjs/common';
import { CommonService } from './common-service';
//디비연결증은글로벌태그
@Global()
@Module({
  
  //이거를 코어모덜로줌
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule { }
