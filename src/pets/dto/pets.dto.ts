import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PetDetails {
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
