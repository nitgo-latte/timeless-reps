import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionScalarWhereInput } from "../inputs/ExercisingSessionScalarWhereInput";
import { ExercisingSessionUpdateManyMutationInput } from "../inputs/ExercisingSessionUpdateManyMutationInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateManyWithWhereWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateManyWithWhereWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ExercisingSessionScalarWhereInput, {
    nullable: false
  })
  where!: ExercisingSessionScalarWhereInput;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExercisingSessionUpdateManyMutationInput;
}
