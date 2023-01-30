import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimeBoxRelationFilter } from "../inputs/TimeBoxRelationFilter";

@TypeGraphQL.InputType("ExercisingIntervalWhereInput", {
  isAbstract: true
})
export class ExercisingIntervalWhereInput {
  @TypeGraphQL.Field(_type => [ExercisingIntervalWhereInput], {
    nullable: true
  })
  AND?: ExercisingIntervalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalWhereInput], {
    nullable: true
  })
  OR?: ExercisingIntervalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalWhereInput], {
    nullable: true
  })
  NOT?: ExercisingIntervalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  closedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TimeBoxRelationFilter, {
    nullable: true
  })
  TimeBox?: TimeBoxRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timeBoxId?: StringFilter | undefined;
}
