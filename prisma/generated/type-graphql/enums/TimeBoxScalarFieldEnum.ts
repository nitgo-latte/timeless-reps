import * as TypeGraphQL from "type-graphql";

export enum TimeBoxScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  start = "start",
  end = "end",
  resting = "resting",
  exercisingSessionId = "exercisingSessionId"
}
TypeGraphQL.registerEnumType(TimeBoxScalarFieldEnum, {
  name: "TimeBoxScalarFieldEnum",
  description: undefined,
});
