import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: DatabaseService) {}

  login(email: string, password: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  register() {
    return 'register';
  }
}
