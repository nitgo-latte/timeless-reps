import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCreateOrConnectWithoutExercisesInput } from "../inputs/MuscleGroupCreateOrConnectWithoutExercisesInput";
import { MuscleGroupCreateWithoutExercisesInput } from "../inputs/MuscleGroupCreateWithoutExercisesInput";
import { MuscleGroupWhereUniqueInput } from "../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.InputType("MuscleGroupCreateNestedManyWithoutExercisesInput", {
  isAbstract: true
})
export class MuscleGroupCreateNestedManyWithoutExercisesInput {
  @TypeGraphQL.Field(_type => [MuscleGroupCreateWithoutExercisesInput], {
    nullable: true
  })
  create?: MuscleGroupCreateWithoutExercisesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupCreateOrConnectWithoutExercisesInput], {
    nullable: true
  })
  connectOrCreate?: MuscleGroupCreateOrConnectWithoutExercisesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: MuscleGroupWhereUniqueInput[] | undefined;
}
