import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateWithoutExerciseInput } from "../inputs/ExercisingSessionCreateWithoutExerciseInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionCreateOrConnectWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionCreateOrConnectWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: ExercisingSessionCreateWithoutExerciseInput;
}
