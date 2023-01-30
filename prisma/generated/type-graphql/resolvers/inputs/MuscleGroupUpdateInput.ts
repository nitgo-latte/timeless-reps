import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseUpdateManyWithoutMuscleGroupsNestedInput } from "../inputs/ExerciseUpdateManyWithoutMuscleGroupsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MuscleGroupUpdateInput", {
  isAbstract: true
})
export class MuscleGroupUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseUpdateManyWithoutMuscleGroupsNestedInput, {
    nullable: true
  })
  exercises?: ExerciseUpdateManyWithoutMuscleGroupsNestedInput | undefined;
}
