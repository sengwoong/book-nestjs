import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //이게전역가드임
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
//인증 => 미들웨어에서 구현 자신이누군인지 JWT  토큰을 실어 보내고 검증
//인가 => 인증을 통과한유저가 요청한 기능을 사용할권한, 퍼미션 롤 접근제어목록 같은 개념 인가는 가드를 이용해구현함