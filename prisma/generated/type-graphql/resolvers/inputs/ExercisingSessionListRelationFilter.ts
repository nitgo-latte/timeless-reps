import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionWhereInput } from "../inputs/ExercisingSessionWhereInput";

@TypeGraphQL.InputType("ExercisingSessionListRelationFilter", {
  isAbstract: true
})
export class ExercisingSessionListRelationFilter {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  every?: ExercisingSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  some?: ExercisingSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  none?: ExercisingSessionWhereInput | undefined;
}
