import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMuscleGroupEnumFilter } from "../inputs/NestedEnumMuscleGroupEnumFilter";
import { MuscleGroupEnum } from "../../enums/MuscleGroupEnum";

@TypeGraphQL.InputType("EnumMuscleGroupEnumFilter", {
  isAbstract: true
})
export class EnumMuscleGroupEnumFilter {
  @TypeGraphQL.Field(_type => MuscleGroupEnum, {
    nullable: true
  })
  equals?: "CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS" | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupEnum], {
    nullable: true
  })
  in?: Array<"CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS"> | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupEnum], {
    nullable: true
  })
  notIn?: Array<"CHEST" | "TRICEPS" | "BACK" | "SHOULDERS" | "CORE" | "ABS" | "LEGS" | "HIPS"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMuscleGroupEnumFilter, {
    nullable: true
  })
  not?: NestedEnumMuscleGroupEnumFilter | undefined;
}
