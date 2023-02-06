import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCountOrderByAggregateInput } from "../inputs/ExercisingSessionCountOrderByAggregateInput";
import { ExercisingSessionMaxOrderByAggregateInput } from "../inputs/ExercisingSessionMaxOrderByAggregateInput";
import { ExercisingSessionMinOrderByAggregateInput } from "../inputs/ExercisingSessionMinOrderByAggregateInput";
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
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exerciseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExercisingSessionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExercisingSessionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExercisingSessionMinOrderByAggregateInput | undefined;
}
