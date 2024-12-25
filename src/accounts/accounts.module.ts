import { Module } from '@nestjs/common';
import { AccountsResolver } from './accounts.resolver';
import { AccountsService } from './accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './models/account.model';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountsResolver, AccountsService],
})
export class AccountsModule {}
