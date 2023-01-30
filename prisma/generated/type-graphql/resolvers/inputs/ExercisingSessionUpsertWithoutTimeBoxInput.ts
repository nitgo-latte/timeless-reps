import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateWithoutTimeBoxInput";
import { ExercisingSessionUpdateWithoutTimeBoxInput } from "../inputs/ExercisingSessionUpdateWithoutTimeBoxInput";

@TypeGraphQL.InputType("ExercisingSessionUpsertWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingSessionUpsertWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExercisingSessionUpdateWithoutTimeBoxInput, {
    nullable: false
  })
  update!: ExercisingSessionUpdateWithoutTimeBoxInput;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutTimeBoxInput, {
    nullable: false
  })
  create!: ExercisingSessionCreateWithoutTimeBoxInput;
}
