import { Controller, Post } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('batches')
export class BatchController {
  constructor(private scheduler: SchedulerRegistry) { }

  @Post('/start-sample')
  start() {
    const job = this.scheduler.getCronJob('cronSample');

    job.start();
    console.log('start!! ', job.lastDate());

    console.log(job.nextDates(3))
  }

  @Post('/stop-sample')
  stop() {
    const job = this.scheduler.getCronJob('cronSample');

    job.stop();
    console.log('stopped!! ', job.lastDate());
  }
}
//STOP 실행예약된작업중지
//START 중지된 다시시작합니다.
//SETTIME(TIME:CRONTIME)현재작업을 중지 새로운시간을설정
//LASTDATA() 작업의 마지막 실행날자
//NEXTDATES(COUNT:NUMBER)예정된작업실행시간카운트