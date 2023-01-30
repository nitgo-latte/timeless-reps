import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateWithoutBreathingChainInput } from "../inputs/ExercisingSessionCreateWithoutBreathingChainInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionCreateOrConnectWithoutBreathingChainInput", {
  isAbstract: true
})
export class ExercisingSessionCreateOrConnectWithoutBreathingChainInput {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutBreathingChainInput, {
    nullable: false
  })
  create!: ExercisingSessionCreateWithoutBreathingChainInput;
}
