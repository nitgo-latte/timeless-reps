import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExercisingSession } from "../models/ExercisingSession";
import { MuscleGroup } from "../models/MuscleGroup";
import { Difficulty } from "../enums/Difficulty";
import { ExerciseCount } from "../resolvers/outputs/ExerciseCount";

@TypeGraphQL.ObjectType("Exercise", {
  isAbstract: true
})
export class Exercise {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  muscleGroups?: MuscleGroup[];

  @TypeGraphQL.Field(_type => Difficulty, {
    nullable: false
  })
  difficulty!: "EASY" | "MEDIUM" | "HARD";

  ExercisingSession?: ExercisingSession[];

  @TypeGraphQL.Field(_type => ExerciseCount, {
    nullable: true
  })
  _count?: ExerciseCount | null;
}
