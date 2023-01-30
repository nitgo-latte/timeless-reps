import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxWhereInput } from "../inputs/TimeBoxWhereInput";

@TypeGraphQL.InputType("TimeBoxRelationFilter", {
  isAbstract: true
})
export class TimeBoxRelationFilter {
  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  is?: TimeBoxWhereInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  isNot?: TimeBoxWhereInput | undefined;
}
