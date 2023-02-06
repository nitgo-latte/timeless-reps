import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TimeBoxMaxAggregate", {
  isAbstract: true
})
export class TimeBoxMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  resting!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exercisingSessionId!: string | null;
}
