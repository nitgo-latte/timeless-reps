import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxWhereInput } from "../inputs/TimeBoxWhereInput";

@TypeGraphQL.InputType("TimeBoxListRelationFilter", {
  isAbstract: true
})
export class TimeBoxListRelationFilter {
  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  every?: TimeBoxWhereInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  some?: TimeBoxWhereInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  none?: TimeBoxWhereInput | undefined;
}
