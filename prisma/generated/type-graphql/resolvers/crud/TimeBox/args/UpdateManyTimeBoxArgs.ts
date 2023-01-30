import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimeBoxUpdateManyMutationInput } from "../../../inputs/TimeBoxUpdateManyMutationInput";
import { TimeBoxWhereInput } from "../../../inputs/TimeBoxWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTimeBoxArgs {
  @TypeGraphQL.Field(_type => TimeBoxUpdateManyMutationInput, {
    nullable: false
  })
  data!: TimeBoxUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TimeBoxWhereInput, {
    nullable: true
  })
  where?: TimeBoxWhereInput | undefined;
}
