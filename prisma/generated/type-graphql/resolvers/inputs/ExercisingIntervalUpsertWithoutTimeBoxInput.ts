import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCreateWithoutTimeBoxInput } from "../inputs/ExercisingIntervalCreateWithoutTimeBoxInput";
import { ExercisingIntervalUpdateWithoutTimeBoxInput } from "../inputs/ExercisingIntervalUpdateWithoutTimeBoxInput";

@TypeGraphQL.InputType("ExercisingIntervalUpsertWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingIntervalUpsertWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExercisingIntervalUpdateWithoutTimeBoxInput, {
    nullable: false
  })
  update!: ExercisingIntervalUpdateWithoutTimeBoxInput;

  @TypeGraphQL.Field(_type => ExercisingIntervalCreateWithoutTimeBoxInput, {
    nullable: false
  })
  create!: ExercisingIntervalCreateWithoutTimeBoxInput;
}
