import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class DepositAmountArgs {
  @Field(() => Int) id: number;
  @Field(() => Int) amount: number;
}
