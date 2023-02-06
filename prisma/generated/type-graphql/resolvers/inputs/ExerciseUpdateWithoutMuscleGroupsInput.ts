import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDifficultyFieldUpdateOperationsInput } from "../inputs/EnumDifficultyFieldUpdateOperationsInput";
import { ExercisingSessionUpdateManyWithoutExerciseNestedInput } from "../inputs/ExercisingSessionUpdateManyWithoutExerciseNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExerciseUpdateWithoutMuscleGroupsInput", {
  isAbstract: true
})
export class ExerciseUpdateWithoutMuscleGroupsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumDifficultyFieldUpdateOperationsInput, {
    nullable: true
  })
  difficulty?: EnumDifficultyFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateManyWithoutExerciseNestedInput, {
    nullable: true
  })
  ExercisingSession?: ExercisingSessionUpdateManyWithoutExerciseNestedInput | undefined;
}
