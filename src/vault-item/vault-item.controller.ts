import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VaultItemService } from './vault-item.service';
import { CreateVaultItemDto } from './dto/create-vault-item.dto';
import { UpdateVaultItemDto } from './dto/update-vault-item.dto';

@Controller('vault-item')
export class VaultItemController {
  constructor(private readonly vaultItemService: VaultItemService) {}

  @Post()
  create(@Body() createVaultItemDto: CreateVaultItemDto) {
    return this.vaultItemService.create(createVaultItemDto);
  }

  @Get()
  findAll() {
    return this.vaultItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vaultItemService.findOne(id);
  }

  //TODO: Retrieve the user id from auth TOKEN
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVaultItemDto: UpdateVaultItemDto,
  ) {
    return this.vaultItemService.update(
      id,
      `68807f85dd2dce31cd064424`,
      updateVaultItemDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vaultItemService.remove(id, `68807f85dd2dce31cd064424`);
  }
}
