import * as TypeGraphQL from "type-graphql";

export enum TimeBoxScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  exercisingSessionId = "exercisingSessionId"
}
TypeGraphQL.registerEnumType(TimeBoxScalarFieldEnum, {
  name: "TimeBoxScalarFieldEnum",
  description: undefined,
});
