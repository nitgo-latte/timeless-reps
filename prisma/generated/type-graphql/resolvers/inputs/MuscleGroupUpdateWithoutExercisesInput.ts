import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMuscleGroupEnumFieldUpdateOperationsInput } from "../inputs/EnumMuscleGroupEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MuscleGroupUpdateWithoutExercisesInput", {
  isAbstract: true
})
export class MuscleGroupUpdateWithoutExercisesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumMuscleGroupEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumMuscleGroupEnumFieldUpdateOperationsInput | undefined;
}
