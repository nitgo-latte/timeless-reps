import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionWhereUniqueInput } from "../../../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueExercisingSessionOrThrowArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;
}
