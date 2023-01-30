import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDifficultyFieldUpdateOperationsInput } from "../inputs/EnumDifficultyFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExerciseUpdateManyMutationInput", {
  isAbstract: true
})
export class ExerciseUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumDifficultyFieldUpdateOperationsInput, {
    nullable: true
  })
  difficulty?: EnumDifficultyFieldUpdateOperationsInput | undefined;
}
