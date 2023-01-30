import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateWithoutMuscleGroupsInput";
import { ExerciseUpdateWithoutMuscleGroupsInput } from "../inputs/ExerciseUpdateWithoutMuscleGroupsInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseUpsertWithWhereUniqueWithoutMuscleGroupsInput", {
  isAbstract: true
})
export class ExerciseUpsertWithWhereUniqueWithoutMuscleGroupsInput {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseUpdateWithoutMuscleGroupsInput, {
    nullable: false
  })
  update!: ExerciseUpdateWithoutMuscleGroupsInput;

  @TypeGraphQL.Field(_type => ExerciseCreateWithoutMuscleGroupsInput, {
    nullable: false
  })
  create!: ExerciseCreateWithoutMuscleGroupsInput;
}
