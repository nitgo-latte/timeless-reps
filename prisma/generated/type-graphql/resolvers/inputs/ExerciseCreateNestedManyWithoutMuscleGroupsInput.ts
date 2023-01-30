import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateOrConnectWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateOrConnectWithoutMuscleGroupsInput";
import { ExerciseCreateWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateWithoutMuscleGroupsInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseCreateNestedManyWithoutMuscleGroupsInput", {
  isAbstract: true
})
export class ExerciseCreateNestedManyWithoutMuscleGroupsInput {
  @TypeGraphQL.Field(_type => [ExerciseCreateWithoutMuscleGroupsInput], {
    nullable: true
  })
  create?: ExerciseCreateWithoutMuscleGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseCreateOrConnectWithoutMuscleGroupsInput], {
    nullable: true
  })
  connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExerciseWhereUniqueInput[] | undefined;
}
