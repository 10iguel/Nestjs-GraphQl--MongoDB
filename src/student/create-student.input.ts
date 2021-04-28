import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(1)
  @MaxLength(20)
  @Field()
  firstName: string;

  @MaxLength(20)
  @MinLength(1)
  @Field()
  lastName: string;
}
