import { IsString, IsEnum } from 'class-validator';
import { VaultType } from 'generated/prisma';

const options: VaultType[] = ['API_KEY', 'NOTE', 'PASSWORD'];
export class CreateVaultItemDto {
  @IsString()
  readonly title: string;

  @IsEnum(options, {
    message: 'Category must be one of: ' + options.join(', '),
  })
  readonly type: VaultType;

  @IsString()
  readonly content: string;

  @IsString()
  readonly userId: string;
}
