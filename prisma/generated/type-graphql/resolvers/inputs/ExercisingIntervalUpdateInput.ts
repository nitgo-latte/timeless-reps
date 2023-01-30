import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TimeBoxUpdateOneRequiredWithoutIntervalNestedInput } from "../inputs/TimeBoxUpdateOneRequiredWithoutIntervalNestedInput";

@TypeGraphQL.InputType("ExercisingIntervalUpdateInput", {
  isAbstract: true
})
export class ExercisingIntervalUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  closedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxUpdateOneRequiredWithoutIntervalNestedInput, {
    nullable: true
  })
  TimeBox?: TimeBoxUpdateOneRequiredWithoutIntervalNestedInput | undefined;
}
