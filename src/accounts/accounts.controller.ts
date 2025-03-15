import { Controller } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() conta: any) {
    return this.accountsService.create(conta);
  }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.accountsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() conta: any) {
    return this.accountsService.update(id, conta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.accountsService.remove(id);
  }
}
