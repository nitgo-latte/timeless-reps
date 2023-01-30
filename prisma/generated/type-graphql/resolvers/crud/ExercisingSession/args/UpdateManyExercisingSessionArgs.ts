import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisingSessionUpdateManyMutationInput } from "../../../inputs/ExercisingSessionUpdateManyMutationInput";
import { ExercisingSessionWhereInput } from "../../../inputs/ExercisingSessionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExercisingSessionArgs {
  @TypeGraphQL.Field(_type => ExercisingSessionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExercisingSessionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExercisingSessionWhereInput, {
    nullable: true
  })
  where?: ExercisingSessionWhereInput | undefined;
}
