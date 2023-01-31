import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionAvgOrderByAggregateInput } from "../inputs/ExercisingSessionAvgOrderByAggregateInput";
import { ExercisingSessionCountOrderByAggregateInput } from "../inputs/ExercisingSessionCountOrderByAggregateInput";
import { ExercisingSessionMaxOrderByAggregateInput } from "../inputs/ExercisingSessionMaxOrderByAggregateInput";
import { ExercisingSessionMinOrderByAggregateInput } from "../inputs/ExercisingSessionMinOrderByAggregateInput";
import { ExercisingSessionSumOrderByAggregateInput } from "../inputs/ExercisingSessionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExercisingSessionOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExercisingSessionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exerciseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  breathingChainId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExercisingSessionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ExercisingSessionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExercisingSessionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExercisingSessionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ExercisingSessionSumOrderByAggregateInput | undefined;
}
