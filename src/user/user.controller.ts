import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SaveUserDto } from './dto/saveUser.dto';
import { FindUserDto } from './dto/findUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { UpdateUserBodyDto, UpdateUserParamDto } from './dto/updateUser.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  saveUser(@Body() saveUserDto: SaveUserDto) {
    return this.userService.saveUser(saveUserDto);
  }

  @Get('/:id')
  findUser(@Param() findUserDto: FindUserDto) {
    return this.userService.findOne(findUserDto);
  }

  @Delete('/:id')
  deleteUser(@Param() deleteUserDto: DeleteUserDto) {
    this.userService.deleteUser(deleteUserDto);
  }

  @Put('/:id')
  updateUser(
    @Param() updateUserParamDto: UpdateUserParamDto,
    @Body() updateUserBodyDto: UpdateUserBodyDto,
  ) {
    return this.userService.updateUser({
      ...updateUserParamDto,
      ...updateUserBodyDto,
    });
  }
}
