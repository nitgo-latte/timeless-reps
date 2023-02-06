import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionOrderByWithAggregationInput } from "../../../inputs/ExercisingSessionOrderByWithAggregationInput";
import { ExercisingSessionScalarWhereWithAggregatesInput } from "../../../inputs/ExercisingSessionScalarWhereWithAggregatesInput";
import { ExercisingSessionWhereInput } from "../../../inputs/ExercisingSessionWhereInput";
import { ExercisingSessionScalarFieldEnum } from "../../../../enums/ExercisingSessionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExercisingSessionArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  where?: ExercisingSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExercisingSessionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "exerciseId" | "message">;

  @TypeGraphQL.Field(_type => ExercisingSessionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExercisingSessionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
