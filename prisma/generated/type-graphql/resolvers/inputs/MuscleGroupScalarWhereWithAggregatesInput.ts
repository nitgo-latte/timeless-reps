import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MuscleGroupScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MuscleGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MuscleGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MuscleGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MuscleGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MuscleGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
