import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainCreateManyInput } from "../../../inputs/BreathingChainCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBreathingChainArgs {
  @TypeGraphQL.Field(_type => [BreathingChainCreateManyInput], {
    nullable: false
  })
  data!: BreathingChainCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
