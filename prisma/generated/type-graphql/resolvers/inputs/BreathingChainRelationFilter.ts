import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainWhereInput } from "../inputs/BreathingChainWhereInput";

@TypeGraphQL.InputType("BreathingChainRelationFilter", {
  isAbstract: true
})
export class BreathingChainRelationFilter {
  @TypeGraphQL.Field(_type => BreathingChainWhereInput, {
    nullable: true
  })
  is?: BreathingChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => BreathingChainWhereInput, {
    nullable: true
  })
  isNot?: BreathingChainWhereInput | undefined;
}
