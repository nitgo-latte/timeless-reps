import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateWithoutTimeBoxInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionCreateOrConnectWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingSessionCreateOrConnectWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutTimeBoxInput, {
    nullable: false
  })
  create!: ExercisingSessionCreateWithoutTimeBoxInput;
}
