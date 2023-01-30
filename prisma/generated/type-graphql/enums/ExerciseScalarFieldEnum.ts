import * as TypeGraphQL from "type-graphql";

export enum ExerciseScalarFieldEnum {
  id = "id",
  name = "name",
  difficulty = "difficulty"
}
TypeGraphQL.registerEnumType(ExerciseScalarFieldEnum, {
  name: "ExerciseScalarFieldEnum",
  description: undefined,
});
