import * as TypeGraphQL from "type-graphql";

export enum MuscleGroupEnum {
  CHEST = "CHEST",
  TRICEPS = "TRICEPS",
  BACK = "BACK",
  SHOULDERS = "SHOULDERS",
  CORE = "CORE",
  ABS = "ABS",
  LEGS = "LEGS",
  HIPS = "HIPS"
}
TypeGraphQL.registerEnumType(MuscleGroupEnum, {
  name: "MuscleGroupEnum",
  description: undefined,
});
