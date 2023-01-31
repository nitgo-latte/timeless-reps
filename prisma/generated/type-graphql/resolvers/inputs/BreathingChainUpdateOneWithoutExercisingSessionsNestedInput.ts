import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCreateOrConnectWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateOrConnectWithoutExercisingSessionsInput";
import { BreathingChainCreateWithoutExercisingSessionsInput } from "../inputs/BreathingChainCreateWithoutExercisingSessionsInput";
import { BreathingChainUpdateWithoutExercisingSessionsInput } from "../inputs/BreathingChainUpdateWithoutExercisingSessionsInput";
import { BreathingChainUpsertWithoutExercisingSessionsInput } from "../inputs/BreathingChainUpsertWithoutExercisingSessionsInput";
import { BreathingChainWhereUniqueInput } from "../inputs/BreathingChainWhereUniqueInput";

@TypeGraphQL.InputType("BreathingChainUpdateOneWithoutExercisingSessionsNestedInput", {
  isAbstract: true
})
export class BreathingChainUpdateOneWithoutExercisingSessionsNestedInput {
  @TypeGraphQL.Field(_type => BreathingChainCreateWithoutExercisingSessionsInput, {
    nullable: true
  })
  create?: BreathingChainCreateWithoutExercisingSessionsInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainCreateOrConnectWithoutExercisingSessionsInput, {
    nullable: true
  })
  connectOrCreate?: BreathingChainCreateOrConnectWithoutExercisingSessionsInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainUpsertWithoutExercisingSessionsInput, {
    nullable: true
  })
  upsert?: BreathingChainUpsertWithoutExercisingSessionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BreathingChainWhereUniqueInput, {
    nullable: true
  })
  connect?: BreathingChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainUpdateWithoutExercisingSessionsInput, {
    nullable: true
  })
  update?: BreathingChainUpdateWithoutExercisingSessionsInput | undefined;
}
