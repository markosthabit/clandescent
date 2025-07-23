import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: { ...createUserDto } });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({ where: { id: `${id}` } });
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  //TODO
  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.prisma.user.update({
      where: {
        id: `${id}`,
      },
      data: {
        ...updateUserDto,
      },
    });
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id: `${id}` } });
    return { message: 'deleted successfully' };
  }
}
