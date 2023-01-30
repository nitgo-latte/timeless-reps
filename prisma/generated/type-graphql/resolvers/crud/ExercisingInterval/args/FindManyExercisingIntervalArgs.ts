import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalOrderByWithRelationInput } from "../../../inputs/ExercisingIntervalOrderByWithRelationInput";
import { ExercisingIntervalWhereInput } from "../../../inputs/ExercisingIntervalWhereInput";
import { ExercisingIntervalWhereUniqueInput } from "../../../inputs/ExercisingIntervalWhereUniqueInput";
import { ExercisingIntervalScalarFieldEnum } from "../../../../enums/ExercisingIntervalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalWhereInput, {
    nullable: true
  })
  where?: ExercisingIntervalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExercisingIntervalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisingIntervalWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExercisingIntervalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExercisingIntervalScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"createdAt" | "closedAt" | "timeBoxId"> | undefined;
}
