import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseOrderByWithRelationInput } from "../inputs/ExerciseOrderByWithRelationInput";
import { TimeBoxOrderByRelationAggregateInput } from "../inputs/TimeBoxOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExercisingSessionOrderByWithRelationInput", {
  isAbstract: true
})
export class ExercisingSessionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExerciseOrderByWithRelationInput, {
    nullable: true
  })
  exercise?: ExerciseOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exerciseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TimeBoxOrderByRelationAggregateInput, {
    nullable: true
  })
  TimeBox?: TimeBoxOrderByRelationAggregateInput | undefined;
}
