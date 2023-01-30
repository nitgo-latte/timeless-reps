import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateWithoutBreathingChainInput } from "../inputs/ExercisingSessionCreateWithoutBreathingChainInput";
import { ExercisingSessionUpdateWithoutBreathingChainInput } from "../inputs/ExercisingSessionUpdateWithoutBreathingChainInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionUpsertWithWhereUniqueWithoutBreathingChainInput", {
  isAbstract: true
})
export class ExercisingSessionUpsertWithWhereUniqueWithoutBreathingChainInput {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateWithoutBreathingChainInput, {
    nullable: false
  })
  update!: ExercisingSessionUpdateWithoutBreathingChainInput;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutBreathingChainInput, {
    nullable: false
  })
  create!: ExercisingSessionCreateWithoutBreathingChainInput;
}
