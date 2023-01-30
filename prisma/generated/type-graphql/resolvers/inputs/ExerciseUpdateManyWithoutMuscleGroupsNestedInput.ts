import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateOrConnectWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateOrConnectWithoutMuscleGroupsInput";
import { ExerciseCreateWithoutMuscleGroupsInput } from "../inputs/ExerciseCreateWithoutMuscleGroupsInput";
import { ExerciseScalarWhereInput } from "../inputs/ExerciseScalarWhereInput";
import { ExerciseUpdateManyWithWhereWithoutMuscleGroupsInput } from "../inputs/ExerciseUpdateManyWithWhereWithoutMuscleGroupsInput";
import { ExerciseUpdateWithWhereUniqueWithoutMuscleGroupsInput } from "../inputs/ExerciseUpdateWithWhereUniqueWithoutMuscleGroupsInput";
import { ExerciseUpsertWithWhereUniqueWithoutMuscleGroupsInput } from "../inputs/ExerciseUpsertWithWhereUniqueWithoutMuscleGroupsInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseUpdateManyWithoutMuscleGroupsNestedInput", {
  isAbstract: true
})
export class ExerciseUpdateManyWithoutMuscleGroupsNestedInput {
  @TypeGraphQL.Field(_type => [ExerciseCreateWithoutMuscleGroupsInput], {
    nullable: true
  })
  create?: ExerciseCreateWithoutMuscleGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseCreateOrConnectWithoutMuscleGroupsInput], {
    nullable: true
  })
  connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseUpsertWithWhereUniqueWithoutMuscleGroupsInput], {
    nullable: true
  })
  upsert?: ExerciseUpsertWithWhereUniqueWithoutMuscleGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  set?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  delete?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseUpdateWithWhereUniqueWithoutMuscleGroupsInput], {
    nullable: true
  })
  update?: ExerciseUpdateWithWhereUniqueWithoutMuscleGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseUpdateManyWithWhereWithoutMuscleGroupsInput], {
    nullable: true
  })
  updateMany?: ExerciseUpdateManyWithWhereWithoutMuscleGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExerciseScalarWhereInput[] | undefined;
}
