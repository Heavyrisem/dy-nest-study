import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AgeGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: User | undefined = request.user;

    if (user && user.age >= 18) return true;
    else throw new ForbiddenException('나이는 18세 이상이어야 합니다.');
  }
}
