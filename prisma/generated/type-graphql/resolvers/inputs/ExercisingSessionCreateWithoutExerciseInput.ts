import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateNestedManyWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateNestedManyWithoutExercisingSessionInput";

@TypeGraphQL.InputType("ExercisingSessionCreateWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionCreateWithoutExerciseInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateNestedManyWithoutExercisingSessionInput, {
    nullable: true
  })
  TimeBox?: TimeBoxCreateNestedManyWithoutExercisingSessionInput | undefined;
}
