import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateManyExerciseInputEnvelope } from "../inputs/ExercisingSessionCreateManyExerciseInputEnvelope";
import { ExercisingSessionCreateOrConnectWithoutExerciseInput } from "../inputs/ExercisingSessionCreateOrConnectWithoutExerciseInput";
import { ExercisingSessionCreateWithoutExerciseInput } from "../inputs/ExercisingSessionCreateWithoutExerciseInput";
import { ExercisingSessionScalarWhereInput } from "../inputs/ExercisingSessionScalarWhereInput";
import { ExercisingSessionUpdateManyWithWhereWithoutExerciseInput } from "../inputs/ExercisingSessionUpdateManyWithWhereWithoutExerciseInput";
import { ExercisingSessionUpdateWithWhereUniqueWithoutExerciseInput } from "../inputs/ExercisingSessionUpdateWithWhereUniqueWithoutExerciseInput";
import { ExercisingSessionUpsertWithWhereUniqueWithoutExerciseInput } from "../inputs/ExercisingSessionUpsertWithWhereUniqueWithoutExerciseInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionUpdateManyWithoutExerciseNestedInput", {
  isAbstract: true
})
export class ExercisingSessionUpdateManyWithoutExerciseNestedInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: ExercisingSessionCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: ExercisingSessionCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionUpsertWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  upsert?: ExercisingSessionUpsertWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: ExercisingSessionCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  set?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  delete?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  connect?: ExercisingSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionUpdateWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  update?: ExercisingSessionUpdateWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionUpdateManyWithWhereWithoutExerciseInput], {
    nullable: true
  })
  updateMany?: ExercisingSessionUpdateManyWithWhereWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExercisingSessionScalarWhereInput[] | undefined;
}
