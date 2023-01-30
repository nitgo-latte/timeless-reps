import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupUpdateWithoutExercisesInput } from "../inputs/MuscleGroupUpdateWithoutExercisesInput";
import { MuscleGroupWhereUniqueInput } from "../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.InputType("MuscleGroupUpdateWithWhereUniqueWithoutExercisesInput", {
  isAbstract: true
})
export class MuscleGroupUpdateWithWhereUniqueWithoutExercisesInput {
  @TypeGraphQL.Field(_type => MuscleGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MuscleGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => MuscleGroupUpdateWithoutExercisesInput, {
    nullable: false
  })
  data!: MuscleGroupUpdateWithoutExercisesInput;
}
