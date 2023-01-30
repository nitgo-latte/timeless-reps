import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupAvgAggregate } from "../outputs/MuscleGroupAvgAggregate";
import { MuscleGroupCountAggregate } from "../outputs/MuscleGroupCountAggregate";
import { MuscleGroupMaxAggregate } from "../outputs/MuscleGroupMaxAggregate";
import { MuscleGroupMinAggregate } from "../outputs/MuscleGroupMinAggregate";
import { MuscleGroupSumAggregate } from "../outputs/MuscleGroupSumAggregate";

@TypeGraphQL.ObjectType("AggregateMuscleGroup", {
  isAbstract: true
})
export class AggregateMuscleGroup {
  @TypeGraphQL.Field(_type => MuscleGroupCountAggregate, {
    nullable: true
  })
  _count!: MuscleGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => MuscleGroupAvgAggregate, {
    nullable: true
  })
  _avg!: MuscleGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => MuscleGroupSumAggregate, {
    nullable: true
  })
  _sum!: MuscleGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => MuscleGroupMinAggregate, {
    nullable: true
  })
  _min!: MuscleGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => MuscleGroupMaxAggregate, {
    nullable: true
  })
  _max!: MuscleGroupMaxAggregate | null;
}
