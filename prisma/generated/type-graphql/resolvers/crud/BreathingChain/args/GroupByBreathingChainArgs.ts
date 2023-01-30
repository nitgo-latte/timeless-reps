import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainOrderByWithAggregationInput } from "../../../inputs/BreathingChainOrderByWithAggregationInput";
import { BreathingChainScalarWhereWithAggregatesInput } from "../../../inputs/BreathingChainScalarWhereWithAggregatesInput";
import { BreathingChainWhereInput } from "../../../inputs/BreathingChainWhereInput";
import { BreathingChainScalarFieldEnum } from "../../../../enums/BreathingChainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainWhereInput, {
    nullable: true
  })
  where?: BreathingChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BreathingChainOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => BreathingChainScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BreathingChainScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
