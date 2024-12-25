import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Account } from './models/account.model';
import { AccountsService } from './accounts.service';

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Query(() => Account, { name: 'account' })
  async getAccount(@Args('id', { type: () => Int }) id: number) {
    return this.accountsService.findOneById(id);
  }
}
