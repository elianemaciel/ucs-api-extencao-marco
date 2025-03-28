import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [ConfigModule.forRoot(),
    AccountsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'test',
      useFactory: async (config: ConfigService) => ({
       uri: config.get('MONGODB_URL'),
       useNewUrlParser: true,
       useUnifiedTopology: true,
      }),
      inject: [ConfigService],
  })],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
