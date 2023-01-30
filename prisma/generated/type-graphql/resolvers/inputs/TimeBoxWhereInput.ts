import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExercisingIntervalRelationFilter } from "../inputs/ExercisingIntervalRelationFilter";
import { ExercisingSessionRelationFilter } from "../inputs/ExercisingSessionRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TimeBoxWhereInput", {
  isAbstract: true
})
export class TimeBoxWhereInput {
  @TypeGraphQL.Field(_type => [TimeBoxWhereInput], {
    nullable: true
  })
  AND?: TimeBoxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereInput], {
    nullable: true
  })
  OR?: TimeBoxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereInput], {
    nullable: true
  })
  NOT?: TimeBoxWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalRelationFilter, {
    nullable: true
  })
  interval?: ExercisingIntervalRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionRelationFilter, {
    nullable: true
  })
  session?: ExercisingSessionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  exercisingSessionId?: IntFilter | undefined;
}
