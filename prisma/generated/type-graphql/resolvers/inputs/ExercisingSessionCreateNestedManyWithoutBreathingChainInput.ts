import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateManyBreathingChainInputEnvelope } from "../inputs/ExercisingSessionCreateManyBreathingChainInputEnvelope";
import { ExercisingSessionCreateOrConnectWithoutBreathingChainInput } from "../inputs/ExercisingSessionCreateOrConnectWithoutBreathingChainInput";
import { ExercisingSessionCreateWithoutBreathingChainInput } from "../inputs/ExercisingSessionCreateWithoutBreathingChainInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionCreateNestedManyWithoutBreathingChainInput", {
  isAbstract: true
})
export class ExercisingSessionCreateNestedManyWithoutBreathingChainInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionCreateWithoutBreathingChainInput], {
    nullable: true
  })
  create?: ExercisingSessionCreateWithoutBreathingChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionCreateOrConnectWithoutBreathingChainInput], {
    nullable: true
  })
  connectOrCreate?: ExercisingSessionCreateOrConnectWithoutBreathingChainInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateManyBreathingChainInputEnvelope, {
    nullable: true
  })
  createMany?: ExercisingSessionCreateManyBreathingChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  connect?: ExercisingSessionWhereUniqueInput[] | undefined;
}
