import { Controller } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account.dto'
import { CreateAccountDto } from './dto/create-account.dto'


@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @ApiBody({ type: CreateAccountDto }) 
  create(@Body() accountDto: CreateAccountDto) {
    return this.accountsService.create(accountDto);
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
  update(@Param('id') id: number, @Body() accountDto: UpdateAccountDto) {
    return this.accountsService.update(id, accountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.accountsService.remove(id);
  }
}
