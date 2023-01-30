import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Difficulty } from "../../enums/Difficulty";

@TypeGraphQL.InputType("ExerciseCreateManyInput", {
  isAbstract: true
})
export class ExerciseCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Difficulty, {
    nullable: false
  })
  difficulty!: "EASY" | "MEDIUM" | "HARD";
}
