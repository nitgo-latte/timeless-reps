import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateNestedOneWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateNestedOneWithoutExercisingSessionsInput";
import { ExerciseCreateNestedOneWithoutExercisingSessionInput } from "../inputs/ExerciseCreateNestedOneWithoutExercisingSessionInput";

@TypeGraphQL.InputType("ExercisingSessionCreateWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingSessionCreateWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExerciseCreateNestedOneWithoutExercisingSessionInput, {
    nullable: false
  })
  exercise!: ExerciseCreateNestedOneWithoutExercisingSessionInput;

  @TypeGraphQL.Field(_type => BreathingChainCreateNestedOneWithoutExercisingSessionsInput, {
    nullable: false
  })
  BreathingChain!: BreathingChainCreateNestedOneWithoutExercisingSessionsInput;
}
