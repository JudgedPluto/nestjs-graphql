import { Injectable } from '@nestjs/common';
import { Account } from './models/account.model';

@Injectable()
export class AccountsService {
  findOneById(id: number): Account {
    return {
      id,
      holderName: 'John Smith',
      amount: 999999,
    };
  }
}
