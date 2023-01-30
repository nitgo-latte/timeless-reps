import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput } from "../inputs/BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput";
import { TimeBoxUpdateManyWithoutSessionNestedInput } from "../inputs/TimeBoxUpdateManyWithoutSessionNestedInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateWithoutExerciseInput {
  @TypeGraphQL.Field(_type => TimeBoxUpdateManyWithoutSessionNestedInput, {
    nullable: true
  })
  TimeBox?: TimeBoxUpdateManyWithoutSessionNestedInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput, {
    nullable: true
  })
  BreathingChain?: BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput | undefined;
}
