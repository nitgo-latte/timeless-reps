import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCountAggregate } from "../outputs/MuscleGroupCountAggregate";
import { MuscleGroupMaxAggregate } from "../outputs/MuscleGroupMaxAggregate";
import { MuscleGroupMinAggregate } from "../outputs/MuscleGroupMinAggregate";
import { MuscleGroupEnum } from "../../enums/MuscleGroupEnum";

@TypeGraphQL.ObjectType("MuscleGroupGroupBy", {
  isAbstract: true
})
export class MuscleGroupGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => MuscleGroupEnum, {
    nullable: false
  })
  name!: "CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS";

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
