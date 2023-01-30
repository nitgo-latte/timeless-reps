import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExercisingInterval } from "../models/ExercisingInterval";
import { ExercisingSession } from "../models/ExercisingSession";

@TypeGraphQL.ObjectType("TimeBox", {
  isAbstract: true
})
export class TimeBox {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  interval?: ExercisingInterval | null;

  session?: ExercisingSession;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exercisingSessionId!: number;
}
