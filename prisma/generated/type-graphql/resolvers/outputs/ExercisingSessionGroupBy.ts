import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionAvgAggregate } from "../outputs/ExercisingSessionAvgAggregate";
import { ExercisingSessionCountAggregate } from "../outputs/ExercisingSessionCountAggregate";
import { ExercisingSessionMaxAggregate } from "../outputs/ExercisingSessionMaxAggregate";
import { ExercisingSessionMinAggregate } from "../outputs/ExercisingSessionMinAggregate";
import { ExercisingSessionSumAggregate } from "../outputs/ExercisingSessionSumAggregate";

@TypeGraphQL.ObjectType("ExercisingSessionGroupBy", {
  isAbstract: true
})
export class ExercisingSessionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exerciseId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  breathingChainId!: string;

  @TypeGraphQL.Field(_type => ExercisingSessionCountAggregate, {
    nullable: true
  })
  _count!: ExercisingSessionCountAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingSessionAvgAggregate, {
    nullable: true
  })
  _avg!: ExercisingSessionAvgAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingSessionSumAggregate, {
    nullable: true
  })
  _sum!: ExercisingSessionSumAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingSessionMinAggregate, {
    nullable: true
  })
  _min!: ExercisingSessionMinAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingSessionMaxAggregate, {
    nullable: true
  })
  _max!: ExercisingSessionMaxAggregate | null;
}
