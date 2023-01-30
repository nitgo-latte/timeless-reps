import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateWithoutExerciseInput } from "../inputs/ExercisingSessionCreateWithoutExerciseInput";
import { ExercisingSessionUpdateWithoutExerciseInput } from "../inputs/ExercisingSessionUpdateWithoutExerciseInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionUpsertWithWhereUniqueWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionUpsertWithWhereUniqueWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ExercisingSessionWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisingSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisingSessionUpdateWithoutExerciseInput, {
    nullable: false
  })
  update!: ExercisingSessionUpdateWithoutExerciseInput;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: ExercisingSessionCreateWithoutExerciseInput;
}
