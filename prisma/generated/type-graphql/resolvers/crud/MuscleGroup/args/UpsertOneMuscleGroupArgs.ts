import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupCreateInput } from "../../../inputs/MuscleGroupCreateInput";
import { MuscleGroupUpdateInput } from "../../../inputs/MuscleGroupUpdateInput";
import { MuscleGroupWhereUniqueInput } from "../../../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMuscleGroupArgs {
  @TypeGraphQL.Field(_type => MuscleGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MuscleGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => MuscleGroupCreateInput, {
    nullable: false
  })
  create!: MuscleGroupCreateInput;

  @TypeGraphQL.Field(_type => MuscleGroupUpdateInput, {
    nullable: false
  })
  update!: MuscleGroupUpdateInput;
}
