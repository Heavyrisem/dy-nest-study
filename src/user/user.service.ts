import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { SaveUserDto } from './dto/saveUser.dto';
import { FindUserDto } from './dto/findUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UpdateUserBodyDto, UpdateUserParamDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(findUserDto: FindUserDto) {
    return this.userRepository.findOne({ where: { id: findUserDto.id } });
  }

  async deleteUser(deleteUserDto: DeleteUserDto) {
    return this.userRepository.delete({ id: deleteUserDto.id });
  }

  async saveUser(user: SaveUserDto) {
    return this.userRepository.save({
      email: user.email,
      age: user.age,
      password: user.password,
    });
  }

  async updateUser(user: UpdateUserBodyDto & UpdateUserParamDto) {
    this.userRepository.update(
      {
        id: user.id,
      },
      { email: user.email, age: user.age, password: user.password },
    );
  }
}
