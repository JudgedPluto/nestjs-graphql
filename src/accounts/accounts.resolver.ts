import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Account } from './models/account.model';
import { AccountsService } from './accounts.service';
import { GetAccountArgs } from './dto/get-account.args';
import { CreateAccountArgs } from './dto/create-account.args';
import { DepositAmountArgs } from './dto/deposit-amount.args';
import { WithdrawAmountArgs } from './dto/withdraw-amount.args';
import { transferAmountArgs } from './dto/transfer-amount.args';

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private accountsService: AccountsService) {}

  @Query(() => Account, { nullable: true })
  getAccount(@Args() { id }: GetAccountArgs) {
    return this.accountsService.get(id);
  }

  @Mutation(() => Account)
  createAccount(@Args() { holderName, amount }: CreateAccountArgs) {
    return this.accountsService.create(holderName, amount);
  }

  @Mutation(() => Account)
  depositAmount(@Args() { id, amount }: DepositAmountArgs) {
    return this.accountsService.deposit(id, amount);
  }

  @Mutation(() => Account)
  withdrawAmount(@Args() { id, amount }: WithdrawAmountArgs) {
    return this.accountsService.withdraw(id, amount);
  }

  @Mutation(() => Account)
  transferAmount(@Args() { from, to, amount }: transferAmountArgs) {
    return this.accountsService.transfer(from, to, amount);
  }
}
