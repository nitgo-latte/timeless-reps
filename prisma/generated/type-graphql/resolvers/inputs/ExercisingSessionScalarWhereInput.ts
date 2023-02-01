import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExercisingSessionScalarWhereInput", {
  isAbstract: true
})
export class ExercisingSessionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereInput], {
    nullable: true
  })
  AND?: ExercisingSessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereInput], {
    nullable: true
  })
  OR?: ExercisingSessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereInput], {
    nullable: true
  })
  NOT?: ExercisingSessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  exerciseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;
}
