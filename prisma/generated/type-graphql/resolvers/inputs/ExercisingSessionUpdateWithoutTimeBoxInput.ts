import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput } from "../inputs/BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput";
import { ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput } from "../inputs/ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput, {
    nullable: true
  })
  exercise?: ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput, {
    nullable: true
  })
  BreathingChain?: BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput | undefined;
}
