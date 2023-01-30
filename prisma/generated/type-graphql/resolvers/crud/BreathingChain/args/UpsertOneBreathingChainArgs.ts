import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainCreateInput } from "../../../inputs/BreathingChainCreateInput";
import { BreathingChainUpdateInput } from "../../../inputs/BreathingChainUpdateInput";
import { BreathingChainWhereUniqueInput } from "../../../inputs/BreathingChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainWhereUniqueInput, {
    nullable: false
  })
  where!: BreathingChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => BreathingChainCreateInput, {
    nullable: false
  })
  create!: BreathingChainCreateInput;

  @TypeGraphQL.Field(_type => BreathingChainUpdateInput, {
    nullable: false
  })
  update!: BreathingChainUpdateInput;
}
