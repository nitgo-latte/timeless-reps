import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Difficulty } from "../../enums/Difficulty";

@TypeGraphQL.ObjectType("ExerciseMinAggregate", {
  isAbstract: true
})
export class ExerciseMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Difficulty, {
    nullable: true
  })
  difficulty!: "EASY" | "MEDIUM" | "HARD" | null;
}
