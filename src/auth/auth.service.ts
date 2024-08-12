import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async checkPasswordForUserEmail({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new NotFoundException('존재하지 않는 이메일 입니다.');

    return user.password === password;
  }
}
