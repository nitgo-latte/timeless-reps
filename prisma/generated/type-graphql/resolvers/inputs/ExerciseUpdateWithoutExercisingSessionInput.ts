import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDifficultyFieldUpdateOperationsInput } from "../inputs/EnumDifficultyFieldUpdateOperationsInput";
import { MuscleGroupUpdateManyWithoutExercisesNestedInput } from "../inputs/MuscleGroupUpdateManyWithoutExercisesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExerciseUpdateWithoutExercisingSessionInput", {
  isAbstract: true
})
export class ExerciseUpdateWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

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
}
