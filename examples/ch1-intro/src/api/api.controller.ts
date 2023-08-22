
//http://api.localhost:3000

// src/users/users.controller.ts

import { Controller, Post, Body, Query } from '@nestjs/common';
import { CreateUserDto } from './api.dto';


@Controller('api')
export class ApiController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    // createUserDto를 사용하여 새 사용자 생성 로직을 처리
  }
  @Post('/email-verify')
  async Email(@Query() dto: CreateUserDto):Promise<string> {
    // createUserDto를 사용하여 새 사용자 생성 로직을 처리
    return;
  }
  @Post('/login')
  async Email2(@Body() dto: CreateUserDto):Promise<string> {
    // createUserDto를 사용하여 새 사용자 생성 로직을 처리
    return;
  }

}


// createUser 엔드포인트 (POST):

// 요청 URL: http://api.localhost:3000/api
// 요청 방법: POST
// 요청 body에 JSON 형식으로 데이터 전송 (raw JSON 선택):
// json
// Copy code
// {
//   "username": "exampleUser",
//   "email": "user@example.com",
//   "password": "examplePassword"
// }
// Content-Type 헤더: application/json
// Email 엔드포인트 (POST):

// 요청 URL: http://api.localhost:3000/api/email-verify
// 요청 방법: POST
// 요청 query parameter로 데이터 전송:
// ruby
// Copy code
// ?username=exampleUser&email=user@example.com&password=examplePassword
// Content-Type 헤더: application/json
// Email2 엔드포인트 (POST):

// 요청 URL: http://api.localhost:3000/api/login
// 요청 방법: POST
// 요청 body에 JSON 형식으로 데이터 전송 (raw JSON 선택):
// json
// Copy code
// {
//   "username": "exampleUser",
//   "email": "user@example.com",
//   "password": "examplePassword"
// }
// Content-Type 헤더: application/json
// 이제 이 정보를 바탕으로 Postman을 사용하여 각 엔드포인트에 요청을 보내볼 수 있습니다. 다만, 위의 예시는 코드와 일치하도록 데이터를 구성한 것이며, 실제로는 해당 엔드포인트의 로직에 따라 필요한 데이터와 형식이 달라질 수 있습니다. 요청을 보내기 전에 해당 엔드포인트의 요구사항에 따라 데이터를 조정해야 합니다.