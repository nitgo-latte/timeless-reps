import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TimeBoxScalarWhereInput", {
  isAbstract: true
})
export class TimeBoxScalarWhereInput {
  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereInput], {
    nullable: true
  })
  AND?: TimeBoxScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereInput], {
    nullable: true
  })
  OR?: TimeBoxScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereInput], {
    nullable: true
  })
  NOT?: TimeBoxScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  end?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  resting?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  exercisingSessionId?: StringNullableFilter | undefined;
}
