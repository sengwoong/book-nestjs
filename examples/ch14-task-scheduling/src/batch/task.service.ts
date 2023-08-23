import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {
    this.addCronJob();
  }

  addCronJob() {
    const name = 'cronSample';
//45 * * * * * 45초
//0 10 * * * * 매시간 10분
//0 /30 9-17 * * 오전9시~오후5시 30분마다
//0 30 11 * *1-5 월요일~ 금요일 11시30분
//

//NAME 데스크이름 선언한 크롬집에 엑세스 하고 이름을제어
//TIMEZONE 실행대기시간 지정 시간 대가 유효한지체크 
//UFCOffSET 시간대의 오픈셋
//USERTIMEOUT 이벤트루프에 실행하는것이잇고 노드프로세스를 중지하고싶을떄
const job = new CronJob(`* * * * * *`, () => {
      this.logger.warn(`run! ${name}`);
    });

    this.schedulerRegistry.addCronJob(name, job);

    this.logger.warn(`job ${name} added!`);
  }


  /*
  @Cron('* * * * * *', { name: 'cronTask' })
  // @Cron(new Date(Date.now() + 3 * 1000))
  // @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_1AM)
  handleCron() {
    this.logger.log('Task Called');
  }

  @Interval('intervalTask', 3000)
  handleInterval() {
    this.logger.log('Task Called by Interval');
  }

  @Timeout('timeoutTask', 5000)
  handleTimeout() {
    this.logger.log('Task Called by Timeout');
  }
  */
}