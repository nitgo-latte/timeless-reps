import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxAvgAggregate } from "../outputs/TimeBoxAvgAggregate";
import { TimeBoxCountAggregate } from "../outputs/TimeBoxCountAggregate";
import { TimeBoxMaxAggregate } from "../outputs/TimeBoxMaxAggregate";
import { TimeBoxMinAggregate } from "../outputs/TimeBoxMinAggregate";
import { TimeBoxSumAggregate } from "../outputs/TimeBoxSumAggregate";

@TypeGraphQL.ObjectType("AggregateTimeBox", {
  isAbstract: true
})
export class AggregateTimeBox {
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
