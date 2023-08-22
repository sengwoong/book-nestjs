import { Injectable } from '@nestjs/common';
import { BaseService } from './base-service';
import { ServiceA } from './service-A';

@Injectable()
export class ServiceB extends BaseService {
  // 상속관계에서 생성자 기반 주입을 받을 때는 하위 클래스가 super를 통해 상위 클래스에 필요한 프로바이더를 전달해 줘야 한다.
  //이떄 _serviceA 는 
  // export class BaseService {
  //   // 상속관계에서 생성자 기반 주입을 받을 때
  //   // constructor(private readonly serviceA: ServiceA) {}
  
  //   // 상속관계에서 속성 기반 주입을 받을 때

 // (독립사용)
  //   @Inject(ServiceA)
  //   private readonly serviceA: ServiceA;
  //   이다



  
  // constructor(private readonly _serviceA: ServiceA) {
  //   super(_serviceA);
  // }

  getHello(): string {
    return this.doSomeFuncFromA();
  }
}
