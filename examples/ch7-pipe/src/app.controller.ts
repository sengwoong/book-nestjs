import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly appService: AppService) {}

  @Get(':id') // 경로 매개변수인 :id를 받습니다
  getHelloById(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getHello();
  }
}


// ValidationPipe: 데이터 유효성 검사를 위해 사용됩니다. 클래스의 메타데이터와 DTO (Data Transfer Object)를 기반으로 들어오는 데이터의 유효성을 검사합니다.

// TransformPipe: 입력 데이터를 원하는 형식으로 변환합니다. 예를 들어, 입력 데이터의 공백을 제거하거나 특정 문자를 바꿀 수 있습니다.

// DefaultValuePipe: 파라미터의 기본 값을 설정합니다. 값이 없거나 null인 경우 지정된 기본값으로 대체됩니다.

// ParseBoolPipe: 문자열로 표현된 논리 값(예: "true", "false", "1", "0")을 논리 값으로 변환합니다.

// ParseArrayPipe: 문자열로 표현된 배열을 JavaScript 배열로 변환합니다.

// ParseUUIDPipe: UUID 형식의 문자열을 JavaScript의 UUID 객체로 변환합니다.

// ParseEnumPipe: 열거형 값 중 하나로 파라미터 값을 변환합니다.

// ParseDatePipe: 문자열로 표현된 날짜를 JavaScript의 Date 객체로 변환합니다.

// ValidationPipeOptions: ValidationPipe를 사용할 때 추가적인 설정을 제공합니다.

// ...: 그 외에도 다양한 파이프가 존재하며, NestJS는 사용자 정의 파이프도 생성할 수 있습니다.