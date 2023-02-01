import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRelationFilter } from "../inputs/ExerciseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TimeBoxListRelationFilter } from "../inputs/TimeBoxListRelationFilter";

@TypeGraphQL.InputType("ExercisingSessionWhereInput", {
  isAbstract: true
})
export class ExercisingSessionWhereInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionWhereInput], {
    nullable: true
  })
  AND?: ExercisingSessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereInput], {
    nullable: true
  })
  OR?: ExercisingSessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereInput], {
    nullable: true
  })
  NOT?: ExercisingSessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExerciseRelationFilter, {
    nullable: true
  })
  exercise?: ExerciseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  exerciseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TimeBoxListRelationFilter, {
    nullable: true
  })
  TimeBox?: TimeBoxListRelationFilter | undefined;
}
