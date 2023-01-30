import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exercise } from "../models/Exercise";
import { MuscleGroupCount } from "../resolvers/outputs/MuscleGroupCount";

@TypeGraphQL.ObjectType("MuscleGroup", {
  isAbstract: true
})
export class MuscleGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  exercises?: Exercise[];

  @TypeGraphQL.Field(_type => MuscleGroupCount, {
    nullable: true
  })
  _count?: MuscleGroupCount | null;
}
