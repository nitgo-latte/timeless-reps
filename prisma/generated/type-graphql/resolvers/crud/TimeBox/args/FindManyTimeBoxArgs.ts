import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxOrderByWithRelationInput } from "../../../inputs/TimeBoxOrderByWithRelationInput";
import { TimeBoxWhereInput } from "../../../inputs/TimeBoxWhereInput";
import { TimeBoxWhereUniqueInput } from "../../../inputs/TimeBoxWhereUniqueInput";
import { TimeBoxScalarFieldEnum } from "../../../../enums/TimeBoxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  where?: TimeBoxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TimeBoxOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: true
  })
  cursor?: TimeBoxWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "closedAt" | "resting" | "exercisingSessionId"> | undefined;
}
