import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// 어떤형태의 코드라도 수행할수 있다.
// 요청과 읍담에 병형을 가할수 있다.
//요청/응답 주기를 끝낼수있다.
// 여려개의 미들웨어사용하면 NEXT()다음 미들웨어로 제어권을 넘긴다.

//쿠키파싱 세션관리 인증인가 본문파싱 
@Injectable()
export class Logger2Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request2...')
    next();
  }
}
