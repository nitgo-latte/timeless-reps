import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionWhereInput } from "../../../inputs/ExercisingSessionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExercisingSessionArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  where?: ExercisingSessionWhereInput | undefined;
}
