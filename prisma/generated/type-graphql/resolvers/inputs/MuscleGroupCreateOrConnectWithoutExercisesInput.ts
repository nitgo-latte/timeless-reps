import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCreateWithoutExercisesInput } from "../inputs/MuscleGroupCreateWithoutExercisesInput";
import { MuscleGroupWhereUniqueInput } from "../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.InputType("MuscleGroupCreateOrConnectWithoutExercisesInput", {
  isAbstract: true
})
export class MuscleGroupCreateOrConnectWithoutExercisesInput {
  @TypeGraphQL.Field(_type => MuscleGroupWhereUniqueInput, {
    nullable: false
  })
  where!: MuscleGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => MuscleGroupCreateWithoutExercisesInput, {
    nullable: false
  })
  create!: MuscleGroupCreateWithoutExercisesInput;
}
