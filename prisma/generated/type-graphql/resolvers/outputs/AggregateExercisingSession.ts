import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCountAggregate } from "../outputs/ExercisingSessionCountAggregate";
import { ExercisingSessionMaxAggregate } from "../outputs/ExercisingSessionMaxAggregate";
import { ExercisingSessionMinAggregate } from "../outputs/ExercisingSessionMinAggregate";

@TypeGraphQL.ObjectType("AggregateExercisingSession", {
  isAbstract: true
})
export class AggregateExercisingSession {
  @TypeGraphQL.Field(_type => ExercisingSessionCountAggregate, {
    nullable: true
  })
  _count!: ExercisingSessionCountAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingSessionMinAggregate, {
    nullable: true
  })
  _min!: ExercisingSessionMinAggregate | null;

  @TypeGraphQL.Field(_type => ExercisingSessionMaxAggregate, {
    nullable: true
  })
  _max!: ExercisingSessionMaxAggregate | null;
}
