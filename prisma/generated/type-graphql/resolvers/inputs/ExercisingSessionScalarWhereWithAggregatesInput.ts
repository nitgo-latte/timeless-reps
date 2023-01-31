import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExercisingSessionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExercisingSessionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExercisingSessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExercisingSessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExercisingSessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  exerciseId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  message?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  breathingChainId?: StringWithAggregatesFilter | undefined;
}
