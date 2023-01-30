import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionOrderByRelationAggregateInput } from "../inputs/ExercisingSessionOrderByRelationAggregateInput";
import { MuscleGroupOrderByRelationAggregateInput } from "../inputs/MuscleGroupOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExerciseOrderByWithRelationInput", {
  isAbstract: true
})
export class ExerciseOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  muscleGroups?: MuscleGroupOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  difficulty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionOrderByRelationAggregateInput, {
    nullable: true
  })
  ExercisingSession?: ExercisingSessionOrderByRelationAggregateInput | undefined;
}
