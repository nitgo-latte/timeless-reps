import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalWhereInput } from "../inputs/ExercisingIntervalWhereInput";

@TypeGraphQL.InputType("ExercisingIntervalRelationFilter", {
  isAbstract: true
})
export class ExercisingIntervalRelationFilter {
  @TypeGraphQL.Field(_type => ExercisingIntervalWhereInput, {
    nullable: true
  })
  is?: ExercisingIntervalWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalWhereInput, {
    nullable: true
  })
  isNot?: ExercisingIntervalWhereInput | undefined;
}
