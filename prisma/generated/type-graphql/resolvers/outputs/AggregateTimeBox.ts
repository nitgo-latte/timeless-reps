import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCountAggregate } from "../outputs/TimeBoxCountAggregate";
import { TimeBoxMaxAggregate } from "../outputs/TimeBoxMaxAggregate";
import { TimeBoxMinAggregate } from "../outputs/TimeBoxMinAggregate";

@TypeGraphQL.ObjectType("AggregateTimeBox", {
  isAbstract: true
})
export class AggregateTimeBox {
  @TypeGraphQL.Field(_type => TimeBoxCountAggregate, {
    nullable: true
  })
  _count!: TimeBoxCountAggregate | null;

  @TypeGraphQL.Field(_type => TimeBoxMinAggregate, {
    nullable: true
  })
  _min!: TimeBoxMinAggregate | null;

  @TypeGraphQL.Field(_type => TimeBoxMaxAggregate, {
    nullable: true
  })
  _max!: TimeBoxMaxAggregate | null;
}
