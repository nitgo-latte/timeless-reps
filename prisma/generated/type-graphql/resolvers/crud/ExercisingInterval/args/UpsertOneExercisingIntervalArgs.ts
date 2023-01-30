import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalCreateInput } from "../../../inputs/ExercisingIntervalCreateInput";
import { ExercisingIntervalUpdateInput } from "../../../inputs/ExercisingIntervalUpdateInput";
import { ExercisingIntervalWhereUniqueInput } from "../../../inputs/ExercisingIntervalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingIntervalWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingIntervalCreateInput, {
    nullable: false
  })
  create!: ExercisingIntervalCreateInput;

  @TypeGraphQL.Field(_type => ExercisingIntervalUpdateInput, {
    nullable: false
  })
  update!: ExercisingIntervalUpdateInput;
}
