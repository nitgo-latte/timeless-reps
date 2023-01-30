import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCreateWithoutTimeBoxInput } from "../inputs/ExercisingIntervalCreateWithoutTimeBoxInput";
import { ExercisingIntervalWhereUniqueInput } from "../inputs/ExercisingIntervalWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingIntervalCreateOrConnectWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingIntervalCreateOrConnectWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExercisingIntervalWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingIntervalWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingIntervalCreateWithoutTimeBoxInput, {
    nullable: false
  })
  create!: ExercisingIntervalCreateWithoutTimeBoxInput;
}
