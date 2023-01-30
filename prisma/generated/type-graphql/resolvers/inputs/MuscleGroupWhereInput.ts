import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseListRelationFilter } from "../inputs/ExerciseListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MuscleGroupWhereInput", {
  isAbstract: true
})
export class MuscleGroupWhereInput {
  @TypeGraphQL.Field(_type => [MuscleGroupWhereInput], {
    nullable: true
  })
  AND?: MuscleGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupWhereInput], {
    nullable: true
  })
  OR?: MuscleGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupWhereInput], {
    nullable: true
  })
  NOT?: MuscleGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExerciseListRelationFilter, {
    nullable: true
  })
  exercises?: ExerciseListRelationFilter | undefined;
}
