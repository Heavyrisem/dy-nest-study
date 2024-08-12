import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: NestJwtService) {}

  createToken(payload: any) {
    return this.jwtService.sign(payload, { expiresIn: '1m' });
  }

  verifyToken(token: string) {
    return this.jwtService.verify(token);
  }
}
