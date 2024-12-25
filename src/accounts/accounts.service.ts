import { Injectable } from '@nestjs/common';
import { Account } from './models/account.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account) private accountsRepository: Repository<Account>,
  ) {}

  get(id: number): Promise<Account> {
    return this.accountsRepository.findOneBy({ id });
  }

  create(holderName: string, amount: number): Promise<Account> {
    return this.accountsRepository.save({ holderName, amount });
  }

  async deposit(id: number, amount: number): Promise<Account> {
    const account = await this.accountsRepository.findOneBy({ id });
    account.amount += amount;
    return await this.accountsRepository.save(account);
  }

  async withdraw(id: number, amount: number): Promise<Account> {
    const account = await this.accountsRepository.findOneBy({ id });
    account.amount -= amount;
    return await this.accountsRepository.save(account);
  }

  async transfer(from: number, to: number, amount: number): Promise<Account> {
    const account = await this.withdraw(from, amount);
    await this.deposit(to, amount);
    return account;
  }
}
