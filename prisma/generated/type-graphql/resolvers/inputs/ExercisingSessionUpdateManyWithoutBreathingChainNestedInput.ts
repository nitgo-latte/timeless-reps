import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateManyBreathingChainInputEnvelope } from "../inputs/ExercisingSessionCreateManyBreathingChainInputEnvelope";
import { ExercisingSessionCreateOrConnectWithoutBreathingChainInput } from "../inputs/ExercisingSessionCreateOrConnectWithoutBreathingChainInput";
import { ExercisingSessionCreateWithoutBreathingChainInput } from "../inputs/ExercisingSessionCreateWithoutBreathingChainInput";
import { ExercisingSessionScalarWhereInput } from "../inputs/ExercisingSessionScalarWhereInput";
import { ExercisingSessionUpdateManyWithWhereWithoutBreathingChainInput } from "../inputs/ExercisingSessionUpdateManyWithWhereWithoutBreathingChainInput";
import { ExercisingSessionUpdateWithWhereUniqueWithoutBreathingChainInput } from "../inputs/ExercisingSessionUpdateWithWhereUniqueWithoutBreathingChainInput";
import { ExercisingSessionUpsertWithWhereUniqueWithoutBreathingChainInput } from "../inputs/ExercisingSessionUpsertWithWhereUniqueWithoutBreathingChainInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateManyWithoutBreathingChainNestedInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateManyWithoutBreathingChainNestedInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionCreateWithoutBreathingChainInput], {
    nullable: true
  })
  create?: ExercisingSessionCreateWithoutBreathingChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionCreateOrConnectWithoutBreathingChainInput], {
    nullable: true
  })
  connectOrCreate?: ExercisingSessionCreateOrConnectWithoutBreathingChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionUpsertWithWhereUniqueWithoutBreathingChainInput], {
    nullable: true
  })
  upsert?: ExercisingSessionUpsertWithWhereUniqueWithoutBreathingChainInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateManyBreathingChainInputEnvelope, {
    nullable: true
  })
  createMany?: ExercisingSessionCreateManyBreathingChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  set?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  delete?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  connect?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionUpdateWithWhereUniqueWithoutBreathingChainInput], {
    nullable: true
  })
  update?: ExercisingSessionUpdateWithWhereUniqueWithoutBreathingChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionUpdateManyWithWhereWithoutBreathingChainInput], {
    nullable: true
  })
  updateMany?: ExercisingSessionUpdateManyWithWhereWithoutBreathingChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExercisingSessionScalarWhereInput[] | undefined;
}
