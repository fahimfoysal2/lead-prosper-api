import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() user: AuthDto) {
    return this.authService.login(user);
  }

  @Post('register')
  register(@Body() user: UserDto) {
    return this.authService.register(user);
  }
}
