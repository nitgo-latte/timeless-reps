import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExercisingIntervalScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExercisingIntervalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExercisingIntervalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExercisingIntervalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExercisingIntervalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExercisingIntervalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  closedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timeBoxId?: StringWithAggregatesFilter | undefined;
}
