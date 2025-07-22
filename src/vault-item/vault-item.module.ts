import { Module } from '@nestjs/common';
import { VaultItemService } from './vault-item.service';
import { VaultItemController } from './vault-item.controller';

@Module({
  controllers: [VaultItemController],
  providers: [VaultItemService],
})
export class VaultItemModule {}
