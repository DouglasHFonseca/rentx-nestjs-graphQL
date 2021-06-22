import { Field, InputType } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export class CreateUser {
  @Field({ nullable: false })
  name?: string;

  @Field({ nullable: false })
  email?: string;

  @Field({ nullable: false })
  driver_license?: string;

  @Field({ nullable: false })
  password?: string;
}
