import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      // eslint-disable-next-line @typescript-eslint/require-await
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    AccountsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
  exports: [AuthService],
})
export class AppModule {}
