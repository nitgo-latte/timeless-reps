import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxCreateInput } from "../../../inputs/TimeBoxCreateInput";
import { TimeBoxUpdateInput } from "../../../inputs/TimeBoxUpdateInput";
import { TimeBoxWhereUniqueInput } from "../../../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateInput, {
    nullable: false
  })
  create!: TimeBoxCreateInput;

  @TypeGraphQL.Field(_type => TimeBoxUpdateInput, {
    nullable: false
  })
  update!: TimeBoxUpdateInput;
}
