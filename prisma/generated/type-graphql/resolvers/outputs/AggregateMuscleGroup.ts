import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCountAggregate } from "../outputs/MuscleGroupCountAggregate";
import { MuscleGroupMaxAggregate } from "../outputs/MuscleGroupMaxAggregate";
import { MuscleGroupMinAggregate } from "../outputs/MuscleGroupMinAggregate";

@TypeGraphQL.ObjectType("AggregateMuscleGroup", {
  isAbstract: true
})
export class AggregateMuscleGroup {
  @TypeGraphQL.Field(_type => MuscleGroupCountAggregate, {
    nullable: true
  })
  _count!: MuscleGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => MuscleGroupMinAggregate, {
    nullable: true
  })
  _min!: MuscleGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => MuscleGroupMaxAggregate, {
    nullable: true
  })
  _max!: MuscleGroupMaxAggregate | null;
}
