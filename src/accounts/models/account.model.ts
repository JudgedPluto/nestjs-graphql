import { Field, Int, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field(() => Int)
  id: number;

  @Field()
  holderName: string;

  @Field(() => Int)
  amount: number;
}
