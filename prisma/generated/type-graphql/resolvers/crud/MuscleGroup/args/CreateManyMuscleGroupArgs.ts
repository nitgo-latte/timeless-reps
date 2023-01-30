import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupCreateManyInput } from "../../../inputs/MuscleGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMuscleGroupArgs {
  @TypeGraphQL.Field(_type => [MuscleGroupCreateManyInput], {
    nullable: false
  })
  data!: MuscleGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
