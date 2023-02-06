import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exercise } from "../models/Exercise";
import { MuscleGroupEnum } from "../enums/MuscleGroupEnum";
import { MuscleGroupCount } from "../resolvers/outputs/MuscleGroupCount";

@TypeGraphQL.ObjectType("MuscleGroup", {
  isAbstract: true
})
export class MuscleGroup {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => MuscleGroupEnum, {
    nullable: false
  })
  name!: "CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS";

  exercises?: Exercise[];

  @TypeGraphQL.Field(_type => MuscleGroupCount, {
    nullable: true
  })
  _count?: MuscleGroupCount | null;
}
