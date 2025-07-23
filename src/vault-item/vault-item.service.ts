import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVaultItemDto } from './dto/create-vault-item.dto';
import { UpdateVaultItemDto } from './dto/update-vault-item.dto';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class VaultItemService {
  //TODO
  async create(createVaultItemDto: CreateVaultItemDto) {
    await prisma.vaultItem.create({ data: { ...createVaultItemDto } });
    return 'This action adds a new vaultItem';
  }

  async findAll() {
    return await prisma.vaultItem.findMany();
  }

  async findOne(id: number) {
    const vaultItem = await prisma.vaultItem.findFirst({
      where: { id: `${id}` },
    });
    if (!vaultItem) throw new NotFoundException('Vault Item Not Found');
    return vaultItem;
  }

  //TODO
  update(id: number, updateVaultItemDto: UpdateVaultItemDto) {
    return `This action updates a #${id} vaultItem`;
  }

  async remove(id: number) {
    await prisma.vaultItem.delete({ where: { id: `${id}` } });
    return { message: 'deleted successfully' };
  }
}
