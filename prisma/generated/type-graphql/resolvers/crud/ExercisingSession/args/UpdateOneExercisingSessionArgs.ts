import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionUpdateInput } from "../../../inputs/ExercisingSessionUpdateInput";
import { ExercisingSessionWhereUniqueInput } from "../../../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExercisingSessionArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionUpdateInput, {
    nullable: false
  })
  data!: ExercisingSessionUpdateInput;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;
}
