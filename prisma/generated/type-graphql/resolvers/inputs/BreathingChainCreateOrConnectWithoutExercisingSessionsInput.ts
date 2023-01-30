import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateWithoutExercisingSessionsInput";
import { BreathingChainWhereUniqueInput } from "../inputs/BreathingChainWhereUniqueInput";

@TypeGraphQL.InputType("BreathingChainCreateOrConnectWithoutExercisingSessionsInput", {
  isAbstract: true
})
export class BreathingChainCreateOrConnectWithoutExercisingSessionsInput {
  @TypeGraphQL.Field(_type => BreathingChainWhereUniqueInput, {
    nullable: false
  })
  where!: BreathingChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => BreathingChainCreateWithoutExercisingSessionsInput, {
    nullable: false
  })
  create!: BreathingChainCreateWithoutExercisingSessionsInput;
}
