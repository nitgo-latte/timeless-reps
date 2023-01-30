import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxCreateInput } from "../../../inputs/TimeBoxCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxCreateInput, {
    nullable: false
  })
  data!: TimeBoxCreateInput;
}
