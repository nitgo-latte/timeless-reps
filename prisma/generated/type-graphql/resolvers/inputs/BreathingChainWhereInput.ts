import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExercisingSessionListRelationFilter } from "../inputs/ExercisingSessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BreathingChainWhereInput", {
  isAbstract: true
})
export class BreathingChainWhereInput {
  @TypeGraphQL.Field(_type => [BreathingChainWhereInput], {
    nullable: true
  })
  AND?: BreathingChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainWhereInput], {
    nullable: true
  })
  OR?: BreathingChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainWhereInput], {
    nullable: true
  })
  NOT?: BreathingChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionListRelationFilter, {
    nullable: true
  })
  exercisingSessions?: ExercisingSessionListRelationFilter | undefined;
}
