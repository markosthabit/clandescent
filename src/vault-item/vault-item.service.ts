import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVaultItemDto } from './dto/create-vault-item.dto';
import { UpdateVaultItemDto } from './dto/update-vault-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VaultItemService {
  constructor(private prisma: PrismaService) {}

  async create(createVaultItemDto: CreateVaultItemDto) {
    await this.prisma.vaultItem.create({ data: { ...createVaultItemDto } });
    return 'This action adds a new vaultItem';
  }

  async findAll() {
    return await this.prisma.vaultItem.findMany();
  }

  async findOne(id: string) {
    const vaultItem = await this.prisma.vaultItem.findFirst({
      where: { id: `${id}` },
    });
    if (!vaultItem) throw new NotFoundException('Vault Item Not Found');
    return vaultItem;
  }

  async update(
    id: string,
    userId: string,
    updateVaultItemDto: UpdateVaultItemDto,
  ) {
    await this.prisma.vaultItem.update({
      where: { id: `${id}`, userId: `${userId}` },
      data: updateVaultItemDto,
    });
    return `This action updates a #${id} vaultItem`;
  }

  async remove(id: string, userId: string) {
    await this.prisma.vaultItem.delete({
      where: { id: `${id}`, userId: `${userId}` },
    });
    return { message: 'deleted successfully' };
  }
}
