import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput } from "../inputs/BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput";
import { ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput } from "../inputs/ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput";
import { TimeBoxUpdateManyWithoutSessionNestedInput } from "../inputs/TimeBoxUpdateManyWithoutSessionNestedInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateInput {
  @TypeGraphQL.Field(_type => ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput, {
    nullable: true
  })
  exercise?: ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxUpdateManyWithoutSessionNestedInput, {
    nullable: true
  })
  TimeBox?: TimeBoxUpdateManyWithoutSessionNestedInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput, {
    nullable: true
  })
  BreathingChain?: BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput | undefined;
}
