import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TimeBoxScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TimeBoxScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TimeBoxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TimeBoxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TimeBoxScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  closedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  resting?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  exercisingSessionId?: StringWithAggregatesFilter | undefined;
}
