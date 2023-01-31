import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BreathingChainScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BreathingChainScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BreathingChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BreathingChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BreathingChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BreathingChainScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;
}
