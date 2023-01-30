import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateNestedOneWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateNestedOneWithoutExercisingSessionsInput";
import { TimeBoxCreateNestedManyWithoutSessionInput } from "../inputs/TimeBoxCreateNestedManyWithoutSessionInput";

@TypeGraphQL.InputType("ExercisingSessionCreateWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionCreateWithoutExerciseInput {
  @TypeGraphQL.Field(_type => TimeBoxCreateNestedManyWithoutSessionInput, {
    nullable: true
  })
  TimeBox?: TimeBoxCreateNestedManyWithoutSessionInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainCreateNestedOneWithoutExercisingSessionsInput, {
    nullable: false
  })
  BreathingChain!: BreathingChainCreateNestedOneWithoutExercisingSessionsInput;
}
