import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  exerciseId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  breathingChainId?: StringFilter | undefined;
}
