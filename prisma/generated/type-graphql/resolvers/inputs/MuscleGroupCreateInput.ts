import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateNestedManyWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateNestedManyWithoutMuscleGroupsInput";

@TypeGraphQL.InputType("MuscleGroupCreateInput", {
  isAbstract: true
})
export class MuscleGroupCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ExerciseCreateNestedManyWithoutMuscleGroupsInput, {
    nullable: true
  })
  exercises?: ExerciseCreateNestedManyWithoutMuscleGroupsInput | undefined;
}
