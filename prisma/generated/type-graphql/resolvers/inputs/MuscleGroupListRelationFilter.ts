import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupWhereInput } from "../inputs/MuscleGroupWhereInput";

@TypeGraphQL.InputType("MuscleGroupListRelationFilter", {
  isAbstract: true
})
export class MuscleGroupListRelationFilter {
  @TypeGraphQL.Field(_type => MuscleGroupWhereInput, {
    nullable: true
  })
  every?: MuscleGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupWhereInput, {
    nullable: true
  })
  some?: MuscleGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => MuscleGroupWhereInput, {
    nullable: true
  })
  none?: MuscleGroupWhereInput | undefined;
}
