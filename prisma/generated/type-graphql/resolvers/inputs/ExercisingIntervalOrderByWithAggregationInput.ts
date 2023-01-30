import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCountOrderByAggregateInput } from "../inputs/ExercisingIntervalCountOrderByAggregateInput";
import { ExercisingIntervalMaxOrderByAggregateInput } from "../inputs/ExercisingIntervalMaxOrderByAggregateInput";
import { ExercisingIntervalMinOrderByAggregateInput } from "../inputs/ExercisingIntervalMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExercisingIntervalOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExercisingIntervalOrderByWithAggregationInput {
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
  timeBoxId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExercisingIntervalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExercisingIntervalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExercisingIntervalMinOrderByAggregateInput | undefined;
}
