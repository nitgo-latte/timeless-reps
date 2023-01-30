import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalOrderByWithAggregationInput } from "../../../inputs/ExercisingIntervalOrderByWithAggregationInput";
import { ExercisingIntervalScalarWhereWithAggregatesInput } from "../../../inputs/ExercisingIntervalScalarWhereWithAggregatesInput";
import { ExercisingIntervalWhereInput } from "../../../inputs/ExercisingIntervalWhereInput";
import { ExercisingIntervalScalarFieldEnum } from "../../../../enums/ExercisingIntervalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalWhereInput, {
    nullable: true
  })
  where?: ExercisingIntervalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExercisingIntervalOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"createdAt" | "closedAt" | "timeBoxId">;

  @TypeGraphQL.Field(_type => ExercisingIntervalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExercisingIntervalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
