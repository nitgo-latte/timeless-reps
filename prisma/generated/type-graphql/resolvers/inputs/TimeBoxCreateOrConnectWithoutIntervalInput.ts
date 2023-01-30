import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateWithoutIntervalInput } from "../inputs/TimeBoxCreateWithoutIntervalInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxCreateOrConnectWithoutIntervalInput", {
  isAbstract: true
})
export class TimeBoxCreateOrConnectWithoutIntervalInput {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutIntervalInput, {
    nullable: false
  })
  create!: TimeBoxCreateWithoutIntervalInput;
}
