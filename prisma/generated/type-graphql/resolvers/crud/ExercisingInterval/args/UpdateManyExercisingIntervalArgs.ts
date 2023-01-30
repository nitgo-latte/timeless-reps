import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingIntervalUpdateManyMutationInput } from "../../../inputs/ExercisingIntervalUpdateManyMutationInput";
import { ExercisingIntervalWhereInput } from "../../../inputs/ExercisingIntervalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExercisingIntervalArgs {
  @TypeGraphQL.Field(_type => ExercisingIntervalUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExercisingIntervalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExercisingIntervalWhereInput, {
    nullable: true
  })
  where?: ExercisingIntervalWhereInput | undefined;
}
