import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxWhereUniqueInput } from "../../../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;
}
