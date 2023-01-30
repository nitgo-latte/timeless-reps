import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalOrderByWithRelationInput } from "../inputs/ExercisingIntervalOrderByWithRelationInput";
import { ExercisingSessionOrderByWithRelationInput } from "../inputs/ExercisingSessionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TimeBoxOrderByWithRelationInput", {
  isAbstract: true
})
export class TimeBoxOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalOrderByWithRelationInput, {
    nullable: true
  })
  interval?: ExercisingIntervalOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionOrderByWithRelationInput, {
    nullable: true
  })
  session?: ExercisingSessionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exercisingSessionId?: "asc" | "desc" | undefined;
}
