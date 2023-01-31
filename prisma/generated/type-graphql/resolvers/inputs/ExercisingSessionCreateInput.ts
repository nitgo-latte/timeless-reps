import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateNestedOneWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateNestedOneWithoutExercisingSessionsInput";
import { ExerciseCreateNestedOneWithoutExercisingSessionInput } from "../inputs/ExerciseCreateNestedOneWithoutExercisingSessionInput";
import { TimeBoxCreateNestedManyWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateNestedManyWithoutExercisingSessionInput";

@TypeGraphQL.InputType("ExercisingSessionCreateInput", {
  isAbstract: true
})
export class ExercisingSessionCreateInput {
  @TypeGraphQL.Field(_type => ExerciseCreateNestedOneWithoutExercisingSessionInput, {
    nullable: true
  })
  exercise?: ExerciseCreateNestedOneWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateNestedManyWithoutExercisingSessionInput, {
    nullable: true
  })
  TimeBox?: TimeBoxCreateNestedManyWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainCreateNestedOneWithoutExercisingSessionsInput, {
    nullable: true
  })
  BreathingChain?: BreathingChainCreateNestedOneWithoutExercisingSessionsInput | undefined;
}
