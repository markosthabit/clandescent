import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService,
  ) { }

  async login(createUserDto: CreateUserDto): Promise<{ access_token: string }> {
    const user = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });
    if (!user)
      throw new NotFoundException('No user with the provided credentials!');
    const correctPass = await bcrypt.compare(
      createUserDto.password,
      user.password,
    );
    if (!correctPass)
      throw new NotFoundException('No user with the provided credentials!');

    const payload = { sub: user.id, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    let user = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });
    if (user) throw new BadRequestException('Registration Failed!');
    const salt = await bcrypt.genSalt(+this.configService.get('SALT_ROUNDS'));

    user = await this.userService.create({
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, salt),
    });
    const payload = { sub: user?.id, role: user?.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
