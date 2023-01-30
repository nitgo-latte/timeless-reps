import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateWithoutIntervalInput } from "../inputs/TimeBoxCreateWithoutIntervalInput";
import { TimeBoxUpdateWithoutIntervalInput } from "../inputs/TimeBoxUpdateWithoutIntervalInput";

@TypeGraphQL.InputType("TimeBoxUpsertWithoutIntervalInput", {
  isAbstract: true
})
export class TimeBoxUpsertWithoutIntervalInput {
  @TypeGraphQL.Field(_type => TimeBoxUpdateWithoutIntervalInput, {
    nullable: false
  })
  update!: TimeBoxUpdateWithoutIntervalInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutIntervalInput, {
    nullable: false
  })
  create!: TimeBoxCreateWithoutIntervalInput;
}
