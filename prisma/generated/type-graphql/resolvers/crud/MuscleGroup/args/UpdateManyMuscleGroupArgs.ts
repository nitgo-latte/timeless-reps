import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupUpdateManyMutationInput } from "../../../inputs/MuscleGroupUpdateManyMutationInput";
import { MuscleGroupWhereInput } from "../../../inputs/MuscleGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMuscleGroupArgs {
  @TypeGraphQL.Field(_type => MuscleGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: MuscleGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MuscleGroupWhereInput, {
    nullable: true
  })
  where?: MuscleGroupWhereInput | undefined;
}
