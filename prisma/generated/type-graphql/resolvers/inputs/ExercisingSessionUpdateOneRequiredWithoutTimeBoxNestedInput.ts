import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateOrConnectWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateOrConnectWithoutTimeBoxInput";
import { ExercisingSessionCreateWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateWithoutTimeBoxInput";
import { ExercisingSessionUpdateWithoutTimeBoxInput } from "../inputs/ExercisingSessionUpdateWithoutTimeBoxInput";
import { ExercisingSessionUpsertWithoutTimeBoxInput } from "../inputs/ExercisingSessionUpsertWithoutTimeBoxInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateOneRequiredWithoutTimeBoxNestedInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateOneRequiredWithoutTimeBoxNestedInput {
  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutTimeBoxInput, {
    nullable: true
  })
  create?: ExercisingSessionCreateWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateOrConnectWithoutTimeBoxInput, {
    nullable: true
  })
  connectOrCreate?: ExercisingSessionCreateOrConnectWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionUpsertWithoutTimeBoxInput, {
    nullable: true
  })
  upsert?: ExercisingSessionUpsertWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: true
  })
  connect?: ExercisingSessionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateWithoutTimeBoxInput, {
    nullable: true
  })
  update?: ExercisingSessionUpdateWithoutTimeBoxInput | undefined;
}
