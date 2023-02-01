import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMuscleGroupEnumFilter } from "../inputs/NestedEnumMuscleGroupEnumFilter";
import { NestedEnumMuscleGroupEnumWithAggregatesFilter } from "../inputs/NestedEnumMuscleGroupEnumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { MuscleGroupEnum } from "../../enums/MuscleGroupEnum";

@TypeGraphQL.InputType("EnumMuscleGroupEnumWithAggregatesFilter", {
  isAbstract: true
})
export class EnumMuscleGroupEnumWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumMuscleGroupEnumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumMuscleGroupEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMuscleGroupEnumFilter, {
    nullable: true
  })
  _min?: NestedEnumMuscleGroupEnumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMuscleGroupEnumFilter, {
    nullable: true
  })
  _max?: NestedEnumMuscleGroupEnumFilter | undefined;
}
