import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupCreateInput } from "../../../inputs/MuscleGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMuscleGroupArgs {
  @TypeGraphQL.Field(_type => MuscleGroupCreateInput, {
    nullable: false
  })
  data!: MuscleGroupCreateInput;
}
