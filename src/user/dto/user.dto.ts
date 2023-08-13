import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserDetails {
  @Field()
  first_name: string;
  @Field()
  last_name: string;
  @Field({ nullable: true })
  full_name: string;
  @Field({ nullable: true })
  username: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  age: number;
}

@InputType()
export class UserId {
  @Field(() => Int)
  id: number;
}
