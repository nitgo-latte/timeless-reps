import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExercisingSessionUpdateManyWithoutBreathingChainNestedInput } from "../inputs/ExercisingSessionUpdateManyWithoutBreathingChainNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BreathingChainUpdateInput", {
  isAbstract: true
})
export class BreathingChainUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateManyWithoutBreathingChainNestedInput, {
    nullable: true
  })
  exercisingSessions?: ExercisingSessionUpdateManyWithoutBreathingChainNestedInput | undefined;
}
