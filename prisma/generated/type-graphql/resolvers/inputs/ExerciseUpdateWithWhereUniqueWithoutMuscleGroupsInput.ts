import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseUpdateWithoutMuscleGroupsInput } from "../inputs/ExerciseUpdateWithoutMuscleGroupsInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseUpdateWithWhereUniqueWithoutMuscleGroupsInput", {
  isAbstract: true
})
export class ExerciseUpdateWithWhereUniqueWithoutMuscleGroupsInput {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseUpdateWithoutMuscleGroupsInput, {
    nullable: false
  })
  data!: ExerciseUpdateWithoutMuscleGroupsInput;
}
