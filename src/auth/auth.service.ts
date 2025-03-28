import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret = '<seu_segredo_super_secreto>';

  generateToken(userId: string): string {
    return sign({ sub: userId }, this.jwtSecret, { expiresIn: '1h' });
  }

  validateToken(token: string): any {
    try {
      return verify(token, this.jwtSecret);
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}