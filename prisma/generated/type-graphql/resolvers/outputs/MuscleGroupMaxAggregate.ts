import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupEnum } from "../../enums/MuscleGroupEnum";

@TypeGraphQL.ObjectType("MuscleGroupMaxAggregate", {
  isAbstract: true
})
export class MuscleGroupMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => MuscleGroupEnum, {
    nullable: true
  })
  name!: "CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS" | null;
}
