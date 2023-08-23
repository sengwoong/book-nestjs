import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
//이러고 컨트롤러에서 사용
// 'typ':'jwt'
// 'alg':'HS256'
//iss-> 토큰 발급자
//"sub":주제 설명 유일한값 url 혹은 문자열
//"aud" : 누구에게 전달할것인가 보호된리소스 url
//"exp": 만료시간 unix epoch
//ndf : 정의된 시간 이후토큰 unix epoch
//iat : 언재 토큰을 발급 unix epoch
//jti :토큰식별자 
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(request: Request) {
    return false;
  }
}
