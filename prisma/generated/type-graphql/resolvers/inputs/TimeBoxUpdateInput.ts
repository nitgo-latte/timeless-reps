import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExercisingIntervalUpdateOneWithoutTimeBoxNestedInput } from "../inputs/ExercisingIntervalUpdateOneWithoutTimeBoxNestedInput";
import { ExercisingSessionUpdateOneRequiredWithoutTimeBoxNestedInput } from "../inputs/ExercisingSessionUpdateOneRequiredWithoutTimeBoxNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TimeBoxUpdateInput", {
  isAbstract: true
})
export class TimeBoxUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalUpdateOneWithoutTimeBoxNestedInput, {
    nullable: true
  })
  interval?: ExercisingIntervalUpdateOneWithoutTimeBoxNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateOneRequiredWithoutTimeBoxNestedInput, {
    nullable: true
  })
  session?: ExercisingSessionUpdateOneRequiredWithoutTimeBoxNestedInput | undefined;
}
