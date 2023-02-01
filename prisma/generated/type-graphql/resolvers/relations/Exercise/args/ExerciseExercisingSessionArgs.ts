import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionOrderByWithRelationInput } from "../../../inputs/ExercisingSessionOrderByWithRelationInput";
import { ExercisingSessionWhereInput } from "../../../inputs/ExercisingSessionWhereInput";
import { ExercisingSessionWhereUniqueInput } from "../../../inputs/ExercisingSessionWhereUniqueInput";
import { ExercisingSessionScalarFieldEnum } from "../../../../enums/ExercisingSessionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ExerciseExercisingSessionArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  where?: ExercisingSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExercisingSessionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExercisingSessionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "exerciseId" | "message"> | undefined;
}
