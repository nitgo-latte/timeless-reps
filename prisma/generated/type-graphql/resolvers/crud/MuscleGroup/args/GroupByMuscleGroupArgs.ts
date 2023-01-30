import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MuscleGroupOrderByWithAggregationInput } from "../../../inputs/MuscleGroupOrderByWithAggregationInput";
import { MuscleGroupScalarWhereWithAggregatesInput } from "../../../inputs/MuscleGroupScalarWhereWithAggregatesInput";
import { MuscleGroupWhereInput } from "../../../inputs/MuscleGroupWhereInput";
import { MuscleGroupScalarFieldEnum } from "../../../../enums/MuscleGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMuscleGroupArgs {
  @TypeGraphQL.Field(_type => MuscleGroupWhereInput, {
    nullable: true
  })
  where?: MuscleGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MuscleGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => MuscleGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MuscleGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
