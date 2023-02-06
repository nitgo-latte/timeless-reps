import * as TypeGraphQL from "type-graphql";

export enum ExercisingSessionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  exerciseId = "exerciseId",
  message = "message"
}
TypeGraphQL.registerEnumType(ExercisingSessionScalarFieldEnum, {
  name: "ExercisingSessionScalarFieldEnum",
  description: undefined,
});
