import { IsString } from 'class-validator';
export class CreateVaultItemDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly userId: string;
}
