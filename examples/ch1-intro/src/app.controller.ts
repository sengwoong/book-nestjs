import { BadRequestException, Controller, Delete, Get, Header, Param, Query, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { version } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //http://localhost:3000

  @Get('hel*o')
  getHello2(): string {
    return this.appService.getHello();
  }
//http://localhost:3000/hellosomething
  @Get()
  getHello3(req:Request): string {
    return this.appService.getHello();
  }
  //http://localhost:3000


  // getHello3(req: Request): string:

  // req: Request 매개변수를 사용하여 요청 객체에 직접 접근할 수 있습니다.
  // 주로 요청의 정보를 읽어들이는데 사용됩니다. (예: 쿼리 파라미터, 헤더 등)
  // 응답을 반환하는데 사용됩니다. 이 때는 직접 응답 객체에 접근해서 조작하게 됩니다.
  // 엔드포인트에 경로나 매개변수에 대한 정보가 없는 경우에 사용될 수 있습니다.
  // getHello4(@Res() res): string:
  
  // @Res() res 데코레이터를 사용하여 응답 객체에 직접 접근할 수 있습니다.
  // 주로 응답 객체를 직접 조작하여 커스텀 응답을 생성하는데 사용됩니다.
  // 응답을 반환하는데 사용됩니다. 이 때는 미리 응답 객체를 조작한 후 반환합니다.
  // 엔드포인트에 경로나 매개변수에 대한 정보가 없는 경우에 사용될 수 있습니다.
  // 단순히 요약하자면, getHello3는 주로 요청 객체에 직접 접근하고 정보를 읽어오는 용도로 사용하며, getHello4는 주로 응답 객체에 직접 접근하고 커스텀 응답을 생성하는데 사용됩니다.

  @Get()
  getHello4(@Res() res): string {
    return this.appService.getHello();
  }


  
  //id 는 숫자
  @Get(':id')
  getHello5(@Param('id') id): string {
    if (id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    }
    return this.appService.getHello();
  }
//http://localhost:3000/users/5

@Header('Custon' ,'Test Header')
@Get(':id')
findOneWithHeader(@Param('id') id:string){
  return this.appService.getHello();
}


//id 는 숫자
// 애는 끝내고보냄
@Redirect('asd://asdad.com')
@Get(':id')
getHello6(@Param('id') id): string {
  if (id < 1) {
    throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
  }
  return this.appService.getHello();
}

//애는 에러뜨면 보냄
@Get('redirect/docs')
@Redirect('https:asd',302)
getDocs(@Query('version')version){
  if(version && version ==='5' ){
    return {url:'asdasd5번이동'}
  }
}

@Delete(':userId/memo/:memoId')
delectUser(@Param() params: { userId: string; memoId: string }) {
  return `${params.userId}랑 ${params.memoId} `;
}



}
