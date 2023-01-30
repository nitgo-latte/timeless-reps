import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumDifficultyFilter } from "../inputs/EnumDifficultyFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExerciseScalarWhereInput", {
  isAbstract: true
})
export class ExerciseScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExerciseScalarWhereInput], {
    nullable: true
  })
  AND?: ExerciseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarWhereInput], {
    nullable: true
  })
  OR?: ExerciseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarWhereInput], {
    nullable: true
  })
  NOT?: ExerciseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDifficultyFilter, {
    nullable: true
  })
  difficulty?: EnumDifficultyFilter | undefined;
}
