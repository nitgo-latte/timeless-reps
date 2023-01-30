import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateNestedOneWithoutIntervalInput } from "../inputs/TimeBoxCreateNestedOneWithoutIntervalInput";

@TypeGraphQL.InputType("ExercisingIntervalCreateInput", {
  isAbstract: true
})
export class ExercisingIntervalCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  closedAt!: Date;

  @TypeGraphQL.Field(_type => TimeBoxCreateNestedOneWithoutIntervalInput, {
    nullable: false
  })
  TimeBox!: TimeBoxCreateNestedOneWithoutIntervalInput;
}
