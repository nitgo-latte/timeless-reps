import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  end!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  resting!: boolean;

  exercisingSession?: ExercisingSession | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exercisingSessionId?: string | null;
}
