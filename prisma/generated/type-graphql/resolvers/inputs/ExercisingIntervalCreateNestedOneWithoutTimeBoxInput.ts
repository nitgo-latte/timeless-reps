import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCreateOrConnectWithoutTimeBoxInput } from "../inputs/ExercisingIntervalCreateOrConnectWithoutTimeBoxInput";
import { ExercisingIntervalCreateWithoutTimeBoxInput } from "../inputs/ExercisingIntervalCreateWithoutTimeBoxInput";
import { ExercisingIntervalWhereUniqueInput } from "../inputs/ExercisingIntervalWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingIntervalCreateNestedOneWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingIntervalCreateNestedOneWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExercisingIntervalCreateWithoutTimeBoxInput, {
    nullable: true
  })
  create?: ExercisingIntervalCreateWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalCreateOrConnectWithoutTimeBoxInput, {
    nullable: true
  })
  connectOrCreate?: ExercisingIntervalCreateOrConnectWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalWhereUniqueInput, {
    nullable: true
  })
  connect?: ExercisingIntervalWhereUniqueInput | undefined;
}
