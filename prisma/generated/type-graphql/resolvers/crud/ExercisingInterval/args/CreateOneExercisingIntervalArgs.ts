import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalCreateInput } from "../../../inputs/ExercisingIntervalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalCreateInput, {
    nullable: false
  })
  data!: ExercisingIntervalCreateInput;
}
