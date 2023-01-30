import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCreateOrConnectWithoutTimeBoxInput } from "../inputs/ExercisingIntervalCreateOrConnectWithoutTimeBoxInput";
import { ExercisingIntervalCreateWithoutTimeBoxInput } from "../inputs/ExercisingIntervalCreateWithoutTimeBoxInput";
import { ExercisingIntervalUpdateWithoutTimeBoxInput } from "../inputs/ExercisingIntervalUpdateWithoutTimeBoxInput";
import { ExercisingIntervalUpsertWithoutTimeBoxInput } from "../inputs/ExercisingIntervalUpsertWithoutTimeBoxInput";
import { ExercisingIntervalWhereUniqueInput } from "../inputs/ExercisingIntervalWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingIntervalUpdateOneWithoutTimeBoxNestedInput", {
  isAbstract: true
})
export class ExercisingIntervalUpdateOneWithoutTimeBoxNestedInput {
  @TypeGraphQL.Field(_type => ExercisingIntervalCreateWithoutTimeBoxInput, {
    nullable: true
  })
  create?: ExercisingIntervalCreateWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalCreateOrConnectWithoutTimeBoxInput, {
    nullable: true
  })
  connectOrCreate?: ExercisingIntervalCreateOrConnectWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalUpsertWithoutTimeBoxInput, {
    nullable: true
  })
  upsert?: ExercisingIntervalUpsertWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalWhereUniqueInput, {
    nullable: true
  })
  connect?: ExercisingIntervalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalUpdateWithoutTimeBoxInput, {
    nullable: true
  })
  update?: ExercisingIntervalUpdateWithoutTimeBoxInput | undefined;
}
