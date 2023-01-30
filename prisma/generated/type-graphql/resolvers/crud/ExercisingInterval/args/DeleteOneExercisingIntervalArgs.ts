import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalWhereUniqueInput } from "../../../inputs/ExercisingIntervalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingIntervalWhereUniqueInput;
}
