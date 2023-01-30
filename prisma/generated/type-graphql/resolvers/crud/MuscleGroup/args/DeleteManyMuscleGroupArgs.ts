import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupWhereInput } from "../../../inputs/MuscleGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMuscleGroupArgs {
  @TypeGraphQL.Field(_type => MuscleGroupWhereInput, {
    nullable: true
  })
  where?: MuscleGroupWhereInput | undefined;
}
