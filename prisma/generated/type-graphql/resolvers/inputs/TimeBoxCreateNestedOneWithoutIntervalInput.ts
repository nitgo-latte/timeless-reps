import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateOrConnectWithoutIntervalInput } from "../inputs/TimeBoxCreateOrConnectWithoutIntervalInput";
import { TimeBoxCreateWithoutIntervalInput } from "../inputs/TimeBoxCreateWithoutIntervalInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxCreateNestedOneWithoutIntervalInput", {
  isAbstract: true
})
export class TimeBoxCreateNestedOneWithoutIntervalInput {
  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutIntervalInput, {
    nullable: true
  })
  create?: TimeBoxCreateWithoutIntervalInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateOrConnectWithoutIntervalInput, {
    nullable: true
  })
  connectOrCreate?: TimeBoxCreateOrConnectWithoutIntervalInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: true
  })
  connect?: TimeBoxWhereUniqueInput | undefined;
}
