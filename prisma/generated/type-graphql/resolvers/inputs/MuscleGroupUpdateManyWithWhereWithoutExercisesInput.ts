import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupScalarWhereInput } from "../inputs/MuscleGroupScalarWhereInput";
import { MuscleGroupUpdateManyMutationInput } from "../inputs/MuscleGroupUpdateManyMutationInput";

@TypeGraphQL.InputType("MuscleGroupUpdateManyWithWhereWithoutExercisesInput", {
  isAbstract: true
})
export class MuscleGroupUpdateManyWithWhereWithoutExercisesInput {
  @TypeGraphQL.Field(_type => MuscleGroupScalarWhereInput, {
    nullable: false
  })
  where!: MuscleGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => MuscleGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: MuscleGroupUpdateManyMutationInput;
}
