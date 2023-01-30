import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCountAggregate } from "../outputs/ExercisingIntervalCountAggregate";
import { ExercisingIntervalMaxAggregate } from "../outputs/ExercisingIntervalMaxAggregate";
import { ExercisingIntervalMinAggregate } from "../outputs/ExercisingIntervalMinAggregate";

@TypeGraphQL.ObjectType("AggregateExercisingInterval", {
  isAbstract: true
})
export class AggregateExercisingInterval {
  @TypeGraphQL.Field(_type => ExercisingIntervalCountAggregate, {
    nullable: true
  })
  _count!: ExercisingIntervalCountAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingIntervalMinAggregate, {
    nullable: true
  })
  _min!: ExercisingIntervalMinAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingIntervalMaxAggregate, {
    nullable: true
  })
  _max!: ExercisingIntervalMaxAggregate | null;
}
