import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateWithoutMuscleGroupsInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseCreateOrConnectWithoutMuscleGroupsInput", {
  isAbstract: true
})
export class ExerciseCreateOrConnectWithoutMuscleGroupsInput {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseCreateWithoutMuscleGroupsInput, {
    nullable: false
  })
  create!: ExerciseCreateWithoutMuscleGroupsInput;
}
