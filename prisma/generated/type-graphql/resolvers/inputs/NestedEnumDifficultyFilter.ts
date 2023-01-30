import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Difficulty } from "../../enums/Difficulty";

@TypeGraphQL.InputType("NestedEnumDifficultyFilter", {
  isAbstract: true
})
export class NestedEnumDifficultyFilter {
  @TypeGraphQL.Field(_type => Difficulty, {
    nullable: true
  })
  equals?: "EASY" | "MEDIUM" | "HARD" | undefined;

  @TypeGraphQL.Field(_type => [Difficulty], {
    nullable: true
  })
  in?: Array<"EASY" | "MEDIUM" | "HARD"> | undefined;

  @TypeGraphQL.Field(_type => [Difficulty], {
    nullable: true
  })
  notIn?: Array<"EASY" | "MEDIUM" | "HARD"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDifficultyFilter, {
    nullable: true
  })
  not?: NestedEnumDifficultyFilter | undefined;
}
