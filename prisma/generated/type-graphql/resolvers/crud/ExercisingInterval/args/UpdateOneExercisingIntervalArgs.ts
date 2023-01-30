import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalUpdateInput } from "../../../inputs/ExercisingIntervalUpdateInput";
import { ExercisingIntervalWhereUniqueInput } from "../../../inputs/ExercisingIntervalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalUpdateInput, {
    nullable: false
  })
  data!: ExercisingIntervalUpdateInput;

  @TypeGraphQL.Field(_type => ExercisingIntervalWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingIntervalWhereUniqueInput;
}
