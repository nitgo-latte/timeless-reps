import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

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
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  exercisingSessionId?: IntFilter | undefined;
}
