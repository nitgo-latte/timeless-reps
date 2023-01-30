import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateWithoutExercisingSessionsInput";
import { BreathingChainUpdateWithoutExercisingSessionsInput } from "../inputs/BreathingChainUpdateWithoutExercisingSessionsInput";

@TypeGraphQL.InputType("BreathingChainUpsertWithoutExercisingSessionsInput", {
  isAbstract: true
})
export class BreathingChainUpsertWithoutExercisingSessionsInput {
  @TypeGraphQL.Field(_type => BreathingChainUpdateWithoutExercisingSessionsInput, {
    nullable: false
  })
  update!: BreathingChainUpdateWithoutExercisingSessionsInput;

  @TypeGraphQL.Field(_type => BreathingChainCreateWithoutExercisingSessionsInput, {
    nullable: false
  })
  create!: BreathingChainCreateWithoutExercisingSessionsInput;
}
