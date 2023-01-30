import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionCreateInput } from "../../../inputs/ExercisingSessionCreateInput";
import { ExercisingSessionUpdateInput } from "../../../inputs/ExercisingSessionUpdateInput";
import { ExercisingSessionWhereUniqueInput } from "../../../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExercisingSessionArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateInput, {
    nullable: false
  })
  create!: ExercisingSessionCreateInput;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateInput, {
    nullable: false
  })
  update!: ExercisingSessionUpdateInput;
}
