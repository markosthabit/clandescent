import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VaultItemModule } from './vault-item/vault-item.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    VaultItemModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
