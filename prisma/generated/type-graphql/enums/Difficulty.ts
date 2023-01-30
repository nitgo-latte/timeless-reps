import * as TypeGraphQL from "type-graphql";

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD"
}
TypeGraphQL.registerEnumType(Difficulty, {
  name: "Difficulty",
  description: undefined,
});
