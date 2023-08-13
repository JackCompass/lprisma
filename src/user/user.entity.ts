import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  @Field()
  first_name: string;
  @Field()
  last_name: string;
  @Field()
  full_name: string;
  @Field({ nullable: true })
  username: string;
  @Field()
  email: string;
  @Field(() => Int, { nullable: true })
  age: number;
}
