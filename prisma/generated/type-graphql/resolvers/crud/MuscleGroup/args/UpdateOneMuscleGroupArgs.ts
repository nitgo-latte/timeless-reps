import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupUpdateInput } from "../../../inputs/MuscleGroupUpdateInput";
import { MuscleGroupWhereUniqueInput } from "../../../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMuscleGroupArgs {
  @TypeGraphQL.Field(_type => MuscleGroupUpdateInput, {
    nullable: false
  })
  data!: MuscleGroupUpdateInput;

  @TypeGraphQL.Field(_type => MuscleGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MuscleGroupWhereUniqueInput;
}
