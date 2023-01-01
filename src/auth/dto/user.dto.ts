import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString } from "class-validator";

export class UserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumberString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  company: string;
}
