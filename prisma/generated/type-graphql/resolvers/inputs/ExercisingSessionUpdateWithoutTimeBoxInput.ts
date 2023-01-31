import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainUpdateOneWithoutExercisingSessionsNestedInput } from "../inputs/BreathingChainUpdateOneWithoutExercisingSessionsNestedInput";
import { ExerciseUpdateOneWithoutExercisingSessionNestedInput } from "../inputs/ExerciseUpdateOneWithoutExercisingSessionNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExerciseUpdateOneWithoutExercisingSessionNestedInput, {
    nullable: true
  })
  exercise?: ExerciseUpdateOneWithoutExercisingSessionNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainUpdateOneWithoutExercisingSessionsNestedInput, {
    nullable: true
  })
  BreathingChain?: BreathingChainUpdateOneWithoutExercisingSessionsNestedInput | undefined;
}
