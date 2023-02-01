import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMuscleGroupEnumFilter } from "../inputs/EnumMuscleGroupEnumFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MuscleGroupScalarWhereInput", {
  isAbstract: true
})
export class MuscleGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [MuscleGroupScalarWhereInput], {
    nullable: true
  })
  AND?: MuscleGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupScalarWhereInput], {
    nullable: true
  })
  OR?: MuscleGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: MuscleGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMuscleGroupEnumFilter, {
    nullable: true
  })
  name?: EnumMuscleGroupEnumFilter | undefined;
}
