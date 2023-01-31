import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxAvgAggregate } from "../outputs/TimeBoxAvgAggregate";
import { TimeBoxCountAggregate } from "../outputs/TimeBoxCountAggregate";
import { TimeBoxMaxAggregate } from "../outputs/TimeBoxMaxAggregate";
import { TimeBoxMinAggregate } from "../outputs/TimeBoxMinAggregate";
import { TimeBoxSumAggregate } from "../outputs/TimeBoxSumAggregate";

@TypeGraphQL.ObjectType("TimeBoxGroupBy", {
  isAbstract: true
})
export class TimeBoxGroupBy {
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
  closedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  resting!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exercisingSessionId!: number;

  @TypeGraphQL.Field(_type => TimeBoxCountAggregate, {
    nullable: true
  })
  _count!: TimeBoxCountAggregate | null;

  @TypeGraphQL.Field(_type => TimeBoxAvgAggregate, {
    nullable: true
  })
  _avg!: TimeBoxAvgAggregate | null;

  @TypeGraphQL.Field(_type => TimeBoxSumAggregate, {
    nullable: true
  })
  _sum!: TimeBoxSumAggregate | null;

  @TypeGraphQL.Field(_type => TimeBoxMinAggregate, {
    nullable: true
  })
  _min!: TimeBoxMinAggregate | null;

  @TypeGraphQL.Field(_type => TimeBoxMaxAggregate, {
    nullable: true
  })
  _max!: TimeBoxMaxAggregate | null;
}
