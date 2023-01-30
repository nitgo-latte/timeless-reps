import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput } from "../inputs/ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput";
import { TimeBoxUpdateManyWithoutSessionNestedInput } from "../inputs/TimeBoxUpdateManyWithoutSessionNestedInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateWithoutBreathingChainInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateWithoutBreathingChainInput {
  @TypeGraphQL.Field(_type => ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput, {
    nullable: true
  })
  exercise?: ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxUpdateManyWithoutSessionNestedInput, {
    nullable: true
  })
  TimeBox?: TimeBoxUpdateManyWithoutSessionNestedInput | undefined;
}
