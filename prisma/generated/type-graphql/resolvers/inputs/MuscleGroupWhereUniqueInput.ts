import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupEnum } from "../../enums/MuscleGroupEnum";

@TypeGraphQL.InputType("MuscleGroupWhereUniqueInput", {
  isAbstract: true
})
export class MuscleGroupWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupEnum, {
    nullable: true
  })
  name?: "CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS" | undefined;
}
