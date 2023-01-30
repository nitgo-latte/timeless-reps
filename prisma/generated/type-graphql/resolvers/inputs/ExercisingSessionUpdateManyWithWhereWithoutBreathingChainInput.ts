import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionScalarWhereInput } from "../inputs/ExercisingSessionScalarWhereInput";
import { ExercisingSessionUpdateManyMutationInput } from "../inputs/ExercisingSessionUpdateManyMutationInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateManyWithWhereWithoutBreathingChainInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateManyWithWhereWithoutBreathingChainInput {
  @TypeGraphQL.Field(_type => ExercisingSessionScalarWhereInput, {
    nullable: false
  })
  where!: ExercisingSessionScalarWhereInput;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExercisingSessionUpdateManyMutationInput;
}
