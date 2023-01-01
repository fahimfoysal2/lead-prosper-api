import { ForbiddenException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { AuthDto, UserDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: DatabaseService) { }

  async login(user: AuthDto) {
    const loginInfo = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!loginInfo) {
      throw new ForbiddenException('Invalid credentials!');
    }

    const isPasswordValid = await argon.verify(loginInfo.password, user.password);

    if (!isPasswordValid) {
      throw new ForbiddenException('Invalid credentials!');
    }

    // remove password from response
    delete loginInfo.password;

    return loginInfo;
  }


  async register(user: UserDto) {
    user.password = await argon.hash(user.password);

    try {
      const registerInfo = await this.prisma.user.create({
        data: user,
      });

      // remove password from response
      delete registerInfo.password;

      return registerInfo;
    } catch (error) {
      if (error.code === 'P2002') {
        //TODO: check if the error is about email or phone
        throw new ForbiddenException('soem of the credentials already used!');
      }
      throw error;
    }
  }
}
