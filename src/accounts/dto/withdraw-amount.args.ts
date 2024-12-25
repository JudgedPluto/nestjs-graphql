import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class WithdrawAmountArgs {
  @Field(() => Int) id: number;
  @Field(() => Int) amount: number;
}
