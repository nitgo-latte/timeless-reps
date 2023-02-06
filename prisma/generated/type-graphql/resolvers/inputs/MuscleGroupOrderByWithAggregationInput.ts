import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCountOrderByAggregateInput } from "../inputs/MuscleGroupCountOrderByAggregateInput";
import { MuscleGroupMaxOrderByAggregateInput } from "../inputs/MuscleGroupMaxOrderByAggregateInput";
import { MuscleGroupMinOrderByAggregateInput } from "../inputs/MuscleGroupMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MuscleGroupOrderByWithAggregationInput", {
  isAbstract: true
})
export class MuscleGroupOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MuscleGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MuscleGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MuscleGroupMinOrderByAggregateInput | undefined;
}
