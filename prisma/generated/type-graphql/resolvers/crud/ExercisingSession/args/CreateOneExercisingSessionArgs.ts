import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionCreateInput } from "../../../inputs/ExercisingSessionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExercisingSessionArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionCreateInput, {
    nullable: false
  })
  data!: ExercisingSessionCreateInput;
}
