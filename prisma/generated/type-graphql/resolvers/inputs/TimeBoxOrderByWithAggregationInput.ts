import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxAvgOrderByAggregateInput } from "../inputs/TimeBoxAvgOrderByAggregateInput";
import { TimeBoxCountOrderByAggregateInput } from "../inputs/TimeBoxCountOrderByAggregateInput";
import { TimeBoxMaxOrderByAggregateInput } from "../inputs/TimeBoxMaxOrderByAggregateInput";
import { TimeBoxMinOrderByAggregateInput } from "../inputs/TimeBoxMinOrderByAggregateInput";
import { TimeBoxSumOrderByAggregateInput } from "../inputs/TimeBoxSumOrderByAggregateInput";
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

  @TypeGraphQL.Field(_type => TimeBoxAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TimeBoxAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TimeBoxMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TimeBoxMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TimeBoxSumOrderByAggregateInput | undefined;
}
