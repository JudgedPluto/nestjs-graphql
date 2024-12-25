import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CreateAccountArgs {
  @Field() holderName: string;
  @Field(() => Int, { defaultValue: 0 }) amount?: number;
}
