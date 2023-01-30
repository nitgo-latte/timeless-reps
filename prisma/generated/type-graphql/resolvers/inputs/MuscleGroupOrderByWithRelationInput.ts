import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseOrderByRelationAggregateInput } from "../inputs/ExerciseOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MuscleGroupOrderByWithRelationInput", {
  isAbstract: true
})
export class MuscleGroupOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExerciseOrderByRelationAggregateInput, {
    nullable: true
  })
  exercises?: ExerciseOrderByRelationAggregateInput | undefined;
}
