import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxWhereInput } from "../../../inputs/TimeBoxWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  where?: TimeBoxWhereInput | undefined;
}
