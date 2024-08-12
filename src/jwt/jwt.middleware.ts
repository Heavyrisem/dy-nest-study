import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from './jwt.service';
import { NextFunction, Request, Response } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      if ('authorization' in req.headers) {
        const token = req.headers.authorization;
        const decoded = this.jwtService.verifyToken(token);

        if (typeof decoded === 'object' && decoded['id'] !== undefined) {
          const user = await this.userService.findOne({ id: decoded['id'] });
          if (user === undefined) {
            throw new NotFoundException('유저가 존재하지 않습니다.');
          }
          req['user'] = user;
        }
      }
      next();
    } catch (e) {
      throw new ForbiddenException('잘못된 접근입니다.');
    }
  }
}
