import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pets {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
