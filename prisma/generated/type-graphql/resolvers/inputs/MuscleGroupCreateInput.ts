import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateNestedManyWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateNestedManyWithoutMuscleGroupsInput";
import { MuscleGroupEnum } from "../../enums/MuscleGroupEnum";

@TypeGraphQL.InputType("MuscleGroupCreateInput", {
  isAbstract: true
})
export class MuscleGroupCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupEnum, {
    nullable: false
  })
  name!: "CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS";

  @TypeGraphQL.Field(_type => ExerciseCreateNestedManyWithoutMuscleGroupsInput, {
    nullable: true
  })
  exercises?: ExerciseCreateNestedManyWithoutMuscleGroupsInput | undefined;
}
