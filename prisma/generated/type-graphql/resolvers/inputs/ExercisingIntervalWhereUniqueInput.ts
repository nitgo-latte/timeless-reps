import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCreatedAtClosedAtCompoundUniqueInput } from "../inputs/ExercisingIntervalCreatedAtClosedAtCompoundUniqueInput";

@TypeGraphQL.InputType("ExercisingIntervalWhereUniqueInput", {
  isAbstract: true
})
export class ExercisingIntervalWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timeBoxId?: string | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalCreatedAtClosedAtCompoundUniqueInput, {
    nullable: true
  })
  createdAt_closedAt?: ExercisingIntervalCreatedAtClosedAtCompoundUniqueInput | undefined;
}
