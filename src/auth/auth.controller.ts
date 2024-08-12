import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from 'src/jwt/jwt.service';
import { UserService } from 'src/user/user.service';
import { AuthUser } from './auth-user.decorator';
import { User } from 'src/entity/user.entity';
import { AuthGuard } from './auth.guard';
import { AgeGuard } from './age.guard';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const isSuccess =
      await this.authService.checkPasswordForUserEmail(loginDto);
    if (isSuccess === false)
      throw new UnauthorizedException('잘못된 로그인 정보입니다.');

    const user = await this.userService.findOneByEmail(loginDto.email);
    const token = this.jwtService.createToken({
      id: user.id,
      email: user.email,
    });

    return { token };
  }

  @UseGuards(AuthGuard)
  @Get('/me')
  async getAuthedUser(@AuthUser() user: User) {
    console.log(user);
    return user;
  }

  @UseGuards(AuthGuard)
  @Get('/test')
  async testAge() {
    return '로그인된 사용자입니다.';
  }
}
