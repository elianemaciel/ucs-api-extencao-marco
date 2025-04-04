import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/guards.guard';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @ApiBody({ type: CreateAccountDto })
  @UseGuards(AuthGuard)
  create(@Body() accountDto: CreateAccountDto) {
    return this.accountsService.create(accountDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: number) {
    return this.accountsService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: number, @Body() accountDto: UpdateAccountDto) {
    return this.accountsService.update(id, accountDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: number) {
    return this.accountsService.remove(id);
  }
}
