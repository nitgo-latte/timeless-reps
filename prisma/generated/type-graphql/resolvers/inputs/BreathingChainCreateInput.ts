import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateNestedManyWithoutBreathingChainInput } from "../inputs/ExercisingSessionCreateNestedManyWithoutBreathingChainInput";

@TypeGraphQL.InputType("BreathingChainCreateInput", {
  isAbstract: true
})
export class BreathingChainCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateNestedManyWithoutBreathingChainInput, {
    nullable: true
  })
  exercisingSessions?: ExercisingSessionCreateNestedManyWithoutBreathingChainInput | undefined;
}
