import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MuscleGroupCreateOrConnectWithoutExercisesInput } from "../inputs/MuscleGroupCreateOrConnectWithoutExercisesInput";
import { MuscleGroupCreateWithoutExercisesInput } from "../inputs/MuscleGroupCreateWithoutExercisesInput";
import { MuscleGroupScalarWhereInput } from "../inputs/MuscleGroupScalarWhereInput";
import { MuscleGroupUpdateManyWithWhereWithoutExercisesInput } from "../inputs/MuscleGroupUpdateManyWithWhereWithoutExercisesInput";
import { MuscleGroupUpdateWithWhereUniqueWithoutExercisesInput } from "../inputs/MuscleGroupUpdateWithWhereUniqueWithoutExercisesInput";
import { MuscleGroupUpsertWithWhereUniqueWithoutExercisesInput } from "../inputs/MuscleGroupUpsertWithWhereUniqueWithoutExercisesInput";
import { MuscleGroupWhereUniqueInput } from "../inputs/MuscleGroupWhereUniqueInput";

@TypeGraphQL.InputType("MuscleGroupUpdateManyWithoutExercisesNestedInput", {
  isAbstract: true
})
export class MuscleGroupUpdateManyWithoutExercisesNestedInput {
  @TypeGraphQL.Field(_type => [MuscleGroupCreateWithoutExercisesInput], {
    nullable: true
  })
  create?: MuscleGroupCreateWithoutExercisesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupCreateOrConnectWithoutExercisesInput], {
    nullable: true
  })
  connectOrCreate?: MuscleGroupCreateOrConnectWithoutExercisesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupUpsertWithWhereUniqueWithoutExercisesInput], {
    nullable: true
  })
  upsert?: MuscleGroupUpsertWithWhereUniqueWithoutExercisesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupWhereUniqueInput], {
    nullable: true
  })
  set?: MuscleGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MuscleGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: MuscleGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: MuscleGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupUpdateWithWhereUniqueWithoutExercisesInput], {
    nullable: true
  })
  update?: MuscleGroupUpdateWithWhereUniqueWithoutExercisesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupUpdateManyWithWhereWithoutExercisesInput], {
    nullable: true
  })
  updateMany?: MuscleGroupUpdateManyWithWhereWithoutExercisesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MuscleGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MuscleGroupScalarWhereInput[] | undefined;
}
