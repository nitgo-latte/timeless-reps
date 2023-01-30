import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ExercisingIntervalCreatedAtClosedAtCompoundUniqueInput", {
  isAbstract: true
})
export class ExercisingIntervalCreatedAtClosedAtCompoundUniqueInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  closedAt!: Date;
}
