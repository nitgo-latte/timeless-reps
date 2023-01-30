import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionCreateManyInput } from "../../../inputs/ExercisingSessionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExercisingSessionArgs {
  @TypeGraphQL.Field(_type => [ExercisingSessionCreateManyInput], {
    nullable: false
  })
  data!: ExercisingSessionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
