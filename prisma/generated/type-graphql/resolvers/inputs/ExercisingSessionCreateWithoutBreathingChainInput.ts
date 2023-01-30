import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateNestedOneWithoutExercisingSessionInput } from "../inputs/ExerciseCreateNestedOneWithoutExercisingSessionInput";
import { TimeBoxCreateNestedManyWithoutSessionInput } from "../inputs/TimeBoxCreateNestedManyWithoutSessionInput";

@TypeGraphQL.InputType("ExercisingSessionCreateWithoutBreathingChainInput", {
  isAbstract: true
})
export class ExercisingSessionCreateWithoutBreathingChainInput {
  @TypeGraphQL.Field(_type => ExerciseCreateNestedOneWithoutExercisingSessionInput, {
    nullable: false
  })
  exercise!: ExerciseCreateNestedOneWithoutExercisingSessionInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateNestedManyWithoutSessionInput, {
    nullable: true
  })
  TimeBox?: TimeBoxCreateNestedManyWithoutSessionInput | undefined;
}
