import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging.interceptor';
import { TransformInterceptor } from './transform.interceptor';
//미들웨어 ->imports 정의순서
//가드  
//인터셉터 -> 요청의정의,컨트롤러,라우터
//라우터->컨트롤러=>전역

//파이프 해더파이프 쿼리->파람->바디
//       바디파이프 쿼리->파람->바디
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );
  await app.listen(3000);
}
bootstrap();
