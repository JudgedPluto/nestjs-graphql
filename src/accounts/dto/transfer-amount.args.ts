import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class transferAmountArgs {
  @Field(() => Int) from: number;
  @Field(() => Int) to: number;
  @Field(() => Int) amount: number;
}
