import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalWhereInput } from "../../../inputs/ExercisingIntervalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalWhereInput, {
    nullable: true
  })
  where?: ExercisingIntervalWhereInput | undefined;
}
