import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateWithoutExercisingSessionInput } from "../inputs/ExerciseCreateWithoutExercisingSessionInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseCreateOrConnectWithoutExercisingSessionInput", {
  isAbstract: true
})
export class ExerciseCreateOrConnectWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: false
  })
  where!: ExerciseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExerciseCreateWithoutExercisingSessionInput, {
    nullable: false
  })
  create!: ExerciseCreateWithoutExercisingSessionInput;
}
