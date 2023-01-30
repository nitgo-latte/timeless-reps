import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDifficultyFieldUpdateOperationsInput } from "../inputs/EnumDifficultyFieldUpdateOperationsInput";
import { ExercisingSessionUpdateManyWithoutExerciseNestedInput } from "../inputs/ExercisingSessionUpdateManyWithoutExerciseNestedInput";
import { MuscleGroupUpdateManyWithoutExercisesNestedInput } from "../inputs/MuscleGroupUpdateManyWithoutExercisesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExerciseUpdateInput", {
  isAbstract: true
})
export class ExerciseUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupUpdateManyWithoutExercisesNestedInput, {
    nullable: true
  })
  muscleGroups?: MuscleGroupUpdateManyWithoutExercisesNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumDifficultyFieldUpdateOperationsInput, {
    nullable: true
  })
  difficulty?: EnumDifficultyFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateManyWithoutExerciseNestedInput, {
    nullable: true
  })
  ExercisingSession?: ExercisingSessionUpdateManyWithoutExerciseNestedInput | undefined;
}
