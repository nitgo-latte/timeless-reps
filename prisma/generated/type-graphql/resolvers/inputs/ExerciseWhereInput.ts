import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDifficultyFilter } from "../inputs/EnumDifficultyFilter";
import { ExercisingSessionListRelationFilter } from "../inputs/ExercisingSessionListRelationFilter";
import { MuscleGroupListRelationFilter } from "../inputs/MuscleGroupListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExerciseWhereInput", {
  isAbstract: true
})
export class ExerciseWhereInput {
  @TypeGraphQL.Field(_type => [ExerciseWhereInput], {
    nullable: true
  })
  AND?: ExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereInput], {
    nullable: true
  })
  OR?: ExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereInput], {
    nullable: true
  })
  NOT?: ExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupListRelationFilter, {
    nullable: true
  })
  muscleGroups?: MuscleGroupListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDifficultyFilter, {
    nullable: true
  })
  difficulty?: EnumDifficultyFilter | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionListRelationFilter, {
    nullable: true
  })
  ExercisingSession?: ExercisingSessionListRelationFilter | undefined;
}
