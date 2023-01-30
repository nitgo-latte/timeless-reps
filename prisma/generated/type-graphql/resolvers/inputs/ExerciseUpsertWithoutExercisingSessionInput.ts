import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateWithoutExercisingSessionInput } from "../inputs/ExerciseCreateWithoutExercisingSessionInput";
import { ExerciseUpdateWithoutExercisingSessionInput } from "../inputs/ExerciseUpdateWithoutExercisingSessionInput";

@TypeGraphQL.InputType("ExerciseUpsertWithoutExercisingSessionInput", {
  isAbstract: true
})
export class ExerciseUpsertWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => ExerciseUpdateWithoutExercisingSessionInput, {
    nullable: false
  })
  update!: ExerciseUpdateWithoutExercisingSessionInput;

  @TypeGraphQL.Field(_type => ExerciseCreateWithoutExercisingSessionInput, {
    nullable: false
  })
  create!: ExerciseCreateWithoutExercisingSessionInput;
}
