import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionUpdateWithoutExerciseInput } from "../inputs/ExercisingSessionUpdateWithoutExerciseInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateWithWhereUniqueWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateWithWhereUniqueWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateWithoutExerciseInput, {
    nullable: false
  })
  data!: ExercisingSessionUpdateWithoutExerciseInput;
}
