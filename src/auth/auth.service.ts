import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret: string;

  constructor(private readonly configService: ConfigService) {
    this.jwtSecret = this.configService.get<string>('JWT_SECRET') ?? '';
  }

  generateToken(userId: string): string {
    return sign({ sub: userId }, this.jwtSecret, { expiresIn: '1h' });
  }

  validateToken(token: string): any {
    try {
      return verify(token, this.jwtSecret);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
