import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainUpdateManyMutationInput } from "../../../inputs/BreathingChainUpdateManyMutationInput";
import { BreathingChainWhereInput } from "../../../inputs/BreathingChainWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainUpdateManyMutationInput, {
    nullable: false
  })
  data!: BreathingChainUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BreathingChainWhereInput, {
    nullable: true
  })
  where?: BreathingChainWhereInput | undefined;
}
