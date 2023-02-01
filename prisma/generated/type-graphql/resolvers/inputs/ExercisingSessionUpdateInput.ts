import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseUpdateOneWithoutExercisingSessionNestedInput } from "../inputs/ExerciseUpdateOneWithoutExercisingSessionNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TimeBoxUpdateManyWithoutExercisingSessionNestedInput } from "../inputs/TimeBoxUpdateManyWithoutExercisingSessionNestedInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseUpdateOneWithoutExercisingSessionNestedInput, {
    nullable: true
  })
  exercise?: ExerciseUpdateOneWithoutExercisingSessionNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxUpdateManyWithoutExercisingSessionNestedInput, {
    nullable: true
  })
  TimeBox?: TimeBoxUpdateManyWithoutExercisingSessionNestedInput | undefined;
}
