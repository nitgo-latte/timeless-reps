import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCountOrderByAggregateInput } from "../inputs/ExerciseCountOrderByAggregateInput";
import { ExerciseMaxOrderByAggregateInput } from "../inputs/ExerciseMaxOrderByAggregateInput";
import { ExerciseMinOrderByAggregateInput } from "../inputs/ExerciseMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExerciseOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExerciseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  difficulty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExerciseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExerciseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExerciseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExerciseMinOrderByAggregateInput | undefined;
}
