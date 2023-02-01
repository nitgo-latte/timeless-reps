import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupEnum } from "../../enums/MuscleGroupEnum";

@TypeGraphQL.InputType("EnumMuscleGroupEnumFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumMuscleGroupEnumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MuscleGroupEnum, {
    nullable: true
  })
  set?: "CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS" | undefined;
}
