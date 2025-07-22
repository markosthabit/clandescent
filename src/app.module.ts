import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VaultItemModule } from './vault-item/vault-item.module';

@Module({
  imports: [UserModule, VaultItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
