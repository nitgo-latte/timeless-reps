import * as TypeGraphQL from "type-graphql";

export enum TimeBoxScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  closedAt = "closedAt",
  resting = "resting",
  exercisingSessionId = "exercisingSessionId"
}
TypeGraphQL.registerEnumType(TimeBoxScalarFieldEnum, {
  name: "TimeBoxScalarFieldEnum",
  description: undefined,
});
