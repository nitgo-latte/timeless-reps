import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxCreateManyInput } from "../../../inputs/TimeBoxCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTimeBoxArgs {
  @TypeGraphQL.Field(_type => [TimeBoxCreateManyInput], {
    nullable: false
  })
  data!: TimeBoxCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
