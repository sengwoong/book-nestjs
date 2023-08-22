// joi 라이브러리에서 모든 기능을 가져옴
import * as Joi from 'joi';

// 데이터 유효성 검사 스키마를 정의하여 내보내는 상수
export const validationSchema = Joi.object({
  // EMAIL_SERVICE 환경 변수에 대한 유효성 검사 스키마:
  // 문자열이며, 빈 값이 아니어야 함
  EMAIL_SERVICE: Joi.string()
    .required(),

  // EMAIL_AUTH_USER 환경 변수에 대한 유효성 검사 스키마:
  // 문자열이며, 빈 값이 아니어야 함
  EMAIL_AUTH_USER: Joi.string()
    .required(),

  // EMAIL_AUTH_PASSWORD 환경 변수에 대한 유효성 검사 스키마:
  // 문자열이며, 빈 값이 아니어야 함
  EMAIL_AUTH_PASSWORD: Joi.string()
    .required(),

  // EMAIL_BASE_URL 환경 변수에 대한 유효성 검사 스키마:
  // 문자열이며, 빈 값이 아니어야 하고, URI 형식을 따라야 함
  EMAIL_BASE_URL: Joi.string()
    .required()
    .uri()
});
