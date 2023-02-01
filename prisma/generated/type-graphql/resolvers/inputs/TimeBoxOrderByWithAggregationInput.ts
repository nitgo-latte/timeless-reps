import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCountOrderByAggregateInput } from "../inputs/TimeBoxCountOrderByAggregateInput";
import { TimeBoxMaxOrderByAggregateInput } from "../inputs/TimeBoxMaxOrderByAggregateInput";
import { TimeBoxMinOrderByAggregateInput } from "../inputs/TimeBoxMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TimeBoxOrderByWithAggregationInput", {
  isAbstract: true
})
export class TimeBoxOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  closedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resting?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exercisingSessionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TimeBoxCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TimeBoxMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TimeBoxMinOrderByAggregateInput | undefined;
}
