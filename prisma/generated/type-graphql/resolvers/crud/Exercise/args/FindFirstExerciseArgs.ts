import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExerciseOrderByWithRelationInput } from "../../../inputs/ExerciseOrderByWithRelationInput";
import { ExerciseWhereInput } from "../../../inputs/ExerciseWhereInput";
import { ExerciseWhereUniqueInput } from "../../../inputs/ExerciseWhereUniqueInput";
import { ExerciseScalarFieldEnum } from "../../../../enums/ExerciseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstExerciseArgs {
  @TypeGraphQL.Field(_type => ExerciseWhereInput, {
    nullable: true
  })
  where?: ExerciseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExerciseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExerciseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExerciseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "difficulty"> | undefined;
}
