import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainWhereInput } from "../../../inputs/BreathingChainWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainWhereInput, {
    nullable: true
  })
  where?: BreathingChainWhereInput | undefined;
}
