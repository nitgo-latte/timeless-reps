import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { TimeBox } from "../models/TimeBox";

@TypeGraphQL.ObjectType("ExercisingInterval", {
  isAbstract: true
})
export class ExercisingInterval {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  closedAt!: Date;

  TimeBox?: TimeBox;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timeBoxId!: string;
}
