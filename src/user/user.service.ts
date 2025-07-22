import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  //TODO
  async create(createUserDto: CreateUserDto) {
    await prisma.user.create({});
    return 'This action adds a new user';
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await prisma.user.findFirst({ where: { id: `${id}` } });
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  //TODO
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    await prisma.user.delete({ where: { id: `${id}` } });
    return { message: 'deleted successfully' };
  }
}
