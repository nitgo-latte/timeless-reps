import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateNestedManyWithoutExerciseInput } from "../inputs/ExercisingSessionCreateNestedManyWithoutExerciseInput";
import { Difficulty } from "../../enums/Difficulty";

@TypeGraphQL.InputType("ExerciseCreateWithoutMuscleGroupsInput", {
  isAbstract: true
})
export class ExerciseCreateWithoutMuscleGroupsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Difficulty, {
    nullable: false
  })
  difficulty!: "EASY" | "MEDIUM" | "HARD";

  @TypeGraphQL.Field(_type => ExercisingSessionCreateNestedManyWithoutExerciseInput, {
    nullable: true
  })
  ExercisingSession?: ExercisingSessionCreateNestedManyWithoutExerciseInput | undefined;
}
