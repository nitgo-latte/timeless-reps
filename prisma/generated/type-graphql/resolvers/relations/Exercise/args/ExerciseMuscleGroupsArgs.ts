import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupOrderByWithRelationInput } from "../../../inputs/MuscleGroupOrderByWithRelationInput";
import { MuscleGroupWhereInput } from "../../../inputs/MuscleGroupWhereInput";
import { MuscleGroupWhereUniqueInput } from "../../../inputs/MuscleGroupWhereUniqueInput";
import { MuscleGroupScalarFieldEnum } from "../../../../enums/MuscleGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ExerciseMuscleGroupsArgs {
  @TypeGraphQL.Field(_type => MuscleGroupWhereInput, {
    nullable: true
  })
  where?: MuscleGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MuscleGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: MuscleGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
