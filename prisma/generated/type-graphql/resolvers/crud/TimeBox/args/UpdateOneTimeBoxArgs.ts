import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxUpdateInput } from "../../../inputs/TimeBoxUpdateInput";
import { TimeBoxWhereUniqueInput } from "../../../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxUpdateInput, {
    nullable: false
  })
  data!: TimeBoxUpdateInput;

  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;
}
