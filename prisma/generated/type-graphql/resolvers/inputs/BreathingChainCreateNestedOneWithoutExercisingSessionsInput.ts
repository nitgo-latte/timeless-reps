import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateOrConnectWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateOrConnectWithoutExercisingSessionsInput";
import { BreathingChainCreateWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateWithoutExercisingSessionsInput";
import { BreathingChainWhereUniqueInput } from "../inputs/BreathingChainWhereUniqueInput";

@TypeGraphQL.InputType("BreathingChainCreateNestedOneWithoutExercisingSessionsInput", {
  isAbstract: true
})
export class BreathingChainCreateNestedOneWithoutExercisingSessionsInput {
  @TypeGraphQL.Field(_type => BreathingChainCreateWithoutExercisingSessionsInput, {
    nullable: true
  })
  create?: BreathingChainCreateWithoutExercisingSessionsInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainCreateOrConnectWithoutExercisingSessionsInput, {
    nullable: true
  })
  connectOrCreate?: BreathingChainCreateOrConnectWithoutExercisingSessionsInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainWhereUniqueInput, {
    nullable: true
  })
  connect?: BreathingChainWhereUniqueInput | undefined;
}
