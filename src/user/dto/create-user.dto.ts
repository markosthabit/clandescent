import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;
}
