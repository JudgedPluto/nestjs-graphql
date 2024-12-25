import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetAccountArgs {
  @Field(() => Int) id: number;
}
