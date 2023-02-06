import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateNestedOneWithoutExercisingSessionInput } from "../inputs/ExerciseCreateNestedOneWithoutExercisingSessionInput";

@TypeGraphQL.InputType("ExercisingSessionCreateWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingSessionCreateWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ExerciseCreateNestedOneWithoutExercisingSessionInput, {
    nullable: true
  })
  exercise?: ExerciseCreateNestedOneWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;
}
