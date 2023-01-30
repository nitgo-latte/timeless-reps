import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ExercisingIntervalMinAggregate", {
  isAbstract: true
})
export class ExercisingIntervalMinAggregate {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  closedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timeBoxId!: string | null;
}
