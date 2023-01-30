import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateOrConnectWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateOrConnectWithoutTimeBoxInput";
import { ExercisingSessionCreateWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateWithoutTimeBoxInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionCreateNestedOneWithoutTimeBoxInput", {
  isAbstract: true
})
export class ExercisingSessionCreateNestedOneWithoutTimeBoxInput {
  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutTimeBoxInput, {
    nullable: true
  })
  create?: ExercisingSessionCreateWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateOrConnectWithoutTimeBoxInput, {
    nullable: true
  })
  connectOrCreate?: ExercisingSessionCreateOrConnectWithoutTimeBoxInput | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: true
  })
  connect?: ExercisingSessionWhereUniqueInput | undefined;
}
