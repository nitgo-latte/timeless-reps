import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TimeBoxUpdateManyWithoutExercisingSessionNestedInput } from "../inputs/TimeBoxUpdateManyWithoutExercisingSessionNestedInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateWithoutExerciseInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxUpdateManyWithoutExercisingSessionNestedInput, {
    nullable: true
  })
  TimeBox?: TimeBoxUpdateManyWithoutExercisingSessionNestedInput | undefined;
}
