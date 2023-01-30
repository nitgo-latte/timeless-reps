import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateOrConnectWithoutIntervalInput } from "../inputs/TimeBoxCreateOrConnectWithoutIntervalInput";
import { TimeBoxCreateWithoutIntervalInput } from "../inputs/TimeBoxCreateWithoutIntervalInput";
import { TimeBoxUpdateWithoutIntervalInput } from "../inputs/TimeBoxUpdateWithoutIntervalInput";
import { TimeBoxUpsertWithoutIntervalInput } from "../inputs/TimeBoxUpsertWithoutIntervalInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxUpdateOneRequiredWithoutIntervalNestedInput", {
  isAbstract: true
})
export class TimeBoxUpdateOneRequiredWithoutIntervalNestedInput {
  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutIntervalInput, {
    nullable: true
  })
  create?: TimeBoxCreateWithoutIntervalInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateOrConnectWithoutIntervalInput, {
    nullable: true
  })
  connectOrCreate?: TimeBoxCreateOrConnectWithoutIntervalInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxUpsertWithoutIntervalInput, {
    nullable: true
  })
  upsert?: TimeBoxUpsertWithoutIntervalInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: true
  })
  connect?: TimeBoxWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TimeBoxUpdateWithoutIntervalInput, {
    nullable: true
  })
  update?: TimeBoxUpdateWithoutIntervalInput | undefined;
}
