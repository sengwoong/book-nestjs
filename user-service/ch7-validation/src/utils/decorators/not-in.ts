import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

// 사용자 정의 유효성 검사 데코레이터 'NotIn' 정의
export function NotIn(property: string, validationOptions?: ValidationOptions) {
  // 데코레이터가 적용될 속성에 대한 정보를 받아 새로운 함수 반환
  return (object: Object, propertyName: string) => {
    // class-validator의 'registerDecorator'를 호출하여 데코레이터 등록
    registerDecorator({
      name: 'NotIn',                    // 데코레이터의 이름
      target: object.constructor,       // 데코레이터가 적용될 클래스의 생성자
      propertyName,                     // 데코레이터가 적용될 속성 이름
      options: validationOptions,       // 유효성 검사 옵션 (선택적)
      constraints: [property],          // 비교할 다른 속성 이름
      validator: {
        // 실제 유효성 검사를 위한 'validate' 메서드 정의
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          // 현재 객체에서 다른 속성의 값을 가져옴
          const relatedValue = (args.object as any)[relatedPropertyName];
          // 두 속성의 값이 모두 문자열인 경우에만 검사 수행
          return typeof value === 'string' && typeof relatedValue === 'string' &&
            // 현재 속성의 값이 다른 속성의 값에 포함되지 않으면 유효
            !relatedValue.includes(value);
        }
      },
    });
  };
}
