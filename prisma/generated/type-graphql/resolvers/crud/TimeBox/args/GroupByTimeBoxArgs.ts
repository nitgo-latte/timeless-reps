import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxOrderByWithAggregationInput } from "../../../inputs/TimeBoxOrderByWithAggregationInput";
import { TimeBoxScalarWhereWithAggregatesInput } from "../../../inputs/TimeBoxScalarWhereWithAggregatesInput";
import { TimeBoxWhereInput } from "../../../inputs/TimeBoxWhereInput";
import { TimeBoxScalarFieldEnum } from "../../../../enums/TimeBoxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  where?: TimeBoxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TimeBoxOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "closedAt" | "resting" | "exercisingSessionId">;

  @TypeGraphQL.Field(_type => TimeBoxScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TimeBoxScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
