import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BreathingChainOrderByWithRelationInput } from "../../../inputs/BreathingChainOrderByWithRelationInput";
import { BreathingChainWhereInput } from "../../../inputs/BreathingChainWhereInput";
import { BreathingChainWhereUniqueInput } from "../../../inputs/BreathingChainWhereUniqueInput";
import { BreathingChainScalarFieldEnum } from "../../../../enums/BreathingChainScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBreathingChainArgs {
  @TypeGraphQL.Field(_type => BreathingChainWhereInput, {
    nullable: true
  })
  where?: BreathingChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BreathingChainOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BreathingChainWhereUniqueInput, {
    nullable: true
  })
  cursor?: BreathingChainWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BreathingChainScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt"> | undefined;
}
