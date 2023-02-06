import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCreateNestedManyWithoutExercisesInput } from "../inputs/MuscleGroupCreateNestedManyWithoutExercisesInput";
import { Difficulty } from "../../enums/Difficulty";

@TypeGraphQL.InputType("ExerciseCreateWithoutExercisingSessionInput", {
  isAbstract: true
})
export class ExerciseCreateWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MuscleGroupCreateNestedManyWithoutExercisesInput, {
    nullable: true
  })
  muscleGroups?: MuscleGroupCreateNestedManyWithoutExercisesInput | undefined;

  @TypeGraphQL.Field(_type => Difficulty, {
    nullable: true
  })
  difficulty?: "EASY" | "MEDIUM" | "HARD" | undefined;
}
