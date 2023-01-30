import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionUpdateWithoutBreathingChainInput } from "../inputs/ExercisingSessionUpdateWithoutBreathingChainInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateWithWhereUniqueWithoutBreathingChainInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateWithWhereUniqueWithoutBreathingChainInput {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateWithoutBreathingChainInput, {
    nullable: false
  })
  data!: ExercisingSessionUpdateWithoutBreathingChainInput;
}
