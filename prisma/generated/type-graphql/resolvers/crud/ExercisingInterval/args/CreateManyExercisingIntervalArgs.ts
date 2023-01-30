import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalCreateManyInput } from "../../../inputs/ExercisingIntervalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => [ExercisingIntervalCreateManyInput], {
    nullable: false
  })
  data!: ExercisingIntervalCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
