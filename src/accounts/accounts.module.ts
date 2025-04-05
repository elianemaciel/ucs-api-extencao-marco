import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from '../auth/auth.service';
import { Accounts, AccountsSchema } from '../schemas/accounts.schemas';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Accounts.name, schema: AccountsSchema },
    ]),
  ],
  controllers: [AccountsController],
  providers: [AccountsService, AuthService],
})
export class AccountsModule {}
