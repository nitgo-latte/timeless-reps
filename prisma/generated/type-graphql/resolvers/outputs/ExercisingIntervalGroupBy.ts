import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCountAggregate } from "../outputs/ExercisingIntervalCountAggregate";
import { ExercisingIntervalMaxAggregate } from "../outputs/ExercisingIntervalMaxAggregate";
import { ExercisingIntervalMinAggregate } from "../outputs/ExercisingIntervalMinAggregate";

@TypeGraphQL.ObjectType("ExercisingIntervalGroupBy", {
  isAbstract: true
})
export class ExercisingIntervalGroupBy {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  closedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timeBoxId!: string;

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
