import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainWhereUniqueInput } from "../../../inputs/BreathingChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainWhereUniqueInput, {
    nullable: false
  })
  where!: BreathingChainWhereUniqueInput;
}
