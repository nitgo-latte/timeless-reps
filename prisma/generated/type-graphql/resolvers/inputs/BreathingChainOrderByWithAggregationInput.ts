import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCountOrderByAggregateInput } from "../inputs/BreathingChainCountOrderByAggregateInput";
import { BreathingChainMaxOrderByAggregateInput } from "../inputs/BreathingChainMaxOrderByAggregateInput";
import { BreathingChainMinOrderByAggregateInput } from "../inputs/BreathingChainMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BreathingChainOrderByWithAggregationInput", {
  isAbstract: true
})
export class BreathingChainOrderByWithAggregationInput {
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
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BreathingChainCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BreathingChainCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BreathingChainMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BreathingChainMinOrderByAggregateInput | undefined;
}
