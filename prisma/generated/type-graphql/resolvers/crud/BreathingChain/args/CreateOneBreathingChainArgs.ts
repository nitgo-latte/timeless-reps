import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainCreateInput } from "../../../inputs/BreathingChainCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainCreateInput, {
    nullable: false
  })
  data!: BreathingChainCreateInput;
}
