import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionWhereInput } from "../inputs/ExercisingSessionWhereInput";

@TypeGraphQL.InputType("ExercisingSessionRelationFilter", {
  isAbstract: true
})
export class ExercisingSessionRelationFilter {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  is?: ExercisingSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  isNot?: ExercisingSessionWhereInput | undefined;
}
