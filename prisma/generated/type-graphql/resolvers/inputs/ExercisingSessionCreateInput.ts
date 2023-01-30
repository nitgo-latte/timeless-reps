import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateNestedOneWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateNestedOneWithoutExercisingSessionsInput";
import { ExerciseCreateNestedOneWithoutExercisingSessionInput } from "../inputs/ExerciseCreateNestedOneWithoutExercisingSessionInput";
import { TimeBoxCreateNestedManyWithoutSessionInput } from "../inputs/TimeBoxCreateNestedManyWithoutSessionInput";

@TypeGraphQL.InputType("ExercisingSessionCreateInput", {
  isAbstract: true
})
export class ExercisingSessionCreateInput {
  @TypeGraphQL.Field(_type => ExerciseCreateNestedOneWithoutExercisingSessionInput, {
    nullable: false
  })
  exercise!: ExerciseCreateNestedOneWithoutExercisingSessionInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateNestedManyWithoutSessionInput, {
    nullable: true
  })
  TimeBox?: TimeBoxCreateNestedManyWithoutSessionInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainCreateNestedOneWithoutExercisingSessionsInput, {
    nullable: false
  })
  BreathingChain!: BreathingChainCreateNestedOneWithoutExercisingSessionsInput;
}
