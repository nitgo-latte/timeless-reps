import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateManyBreathingChainInput } from "../inputs/ExercisingSessionCreateManyBreathingChainInput";

@TypeGraphQL.InputType("ExercisingSessionCreateManyBreathingChainInputEnvelope", {
  isAbstract: true
})
export class ExercisingSessionCreateManyBreathingChainInputEnvelope {
  @TypeGraphQL.Field(_type => [ExercisingSessionCreateManyBreathingChainInput], {
    nullable: false
  })
  data!: ExercisingSessionCreateManyBreathingChainInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
