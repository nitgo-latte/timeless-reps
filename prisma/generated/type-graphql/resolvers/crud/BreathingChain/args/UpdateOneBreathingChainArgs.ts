import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainUpdateInput } from "../../../inputs/BreathingChainUpdateInput";
import { BreathingChainWhereUniqueInput } from "../../../inputs/BreathingChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainUpdateInput, {
    nullable: false
  })
  data!: BreathingChainUpdateInput;

  @TypeGraphQL.Field(_type => BreathingChainWhereUniqueInput, {
    nullable: false
  })
  where!: BreathingChainWhereUniqueInput;
}
