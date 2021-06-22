import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id?: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  driver_license: string;

  @Field()
  isAdmin: boolean;

  @Field()
  avatar: string;

  @Field(() => Date)
  created_at: Date;
}
