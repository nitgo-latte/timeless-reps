import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupWhereUniqueInput } from "../../../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMuscleGroupArgs {
  @TypeGraphQL.Field(_type => MuscleGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MuscleGroupWhereUniqueInput;
}
