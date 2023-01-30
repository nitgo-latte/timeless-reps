import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCreateWithoutExercisesInput } from "../inputs/MuscleGroupCreateWithoutExercisesInput";
import { MuscleGroupUpdateWithoutExercisesInput } from "../inputs/MuscleGroupUpdateWithoutExercisesInput";
import { MuscleGroupWhereUniqueInput } from "../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.InputType("MuscleGroupUpsertWithWhereUniqueWithoutExercisesInput", {
  isAbstract: true
})
export class MuscleGroupUpsertWithWhereUniqueWithoutExercisesInput {
  @TypeGraphQL.Field(_type => MuscleGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MuscleGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => MuscleGroupUpdateWithoutExercisesInput, {
    nullable: false
  })
  update!: MuscleGroupUpdateWithoutExercisesInput;

  @TypeGraphQL.Field(_type => MuscleGroupCreateWithoutExercisesInput, {
    nullable: false
  })
  create!: MuscleGroupCreateWithoutExercisesInput;
}
