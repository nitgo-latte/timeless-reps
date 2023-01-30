import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxOrderByWithRelationInput } from "../inputs/TimeBoxOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExercisingIntervalOrderByWithRelationInput", {
  isAbstract: true
})
export class ExercisingIntervalOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  closedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TimeBoxOrderByWithRelationInput, {
    nullable: true
  })
  TimeBox?: TimeBoxOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timeBoxId?: "asc" | "desc" | undefined;
}
