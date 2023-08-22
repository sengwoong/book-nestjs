import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  // 새로운 사용자 생성
  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  // 모든 사용자 조회
  async findAll() {
    return await this.userRepository.find();
  }

  // 특정 ID를 가진 사용자 조회
  async findOne(id: string) {
    const user = await this.userRepository.findOne({where:{id}});
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // 사용자 정보 업데이트
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    await this.userRepository.update(user, updateUserDto);
    return `Updated user with ID ${id}`;
  }

  // 사용자 삭제
  async remove(id: string) {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return `Removed user with ID ${id}`;
  }
}
