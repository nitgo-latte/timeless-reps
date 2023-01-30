import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateManyExerciseInputEnvelope } from "../inputs/ExercisingSessionCreateManyExerciseInputEnvelope";
import { ExercisingSessionCreateOrConnectWithoutExerciseInput } from "../inputs/ExercisingSessionCreateOrConnectWithoutExerciseInput";
import { ExercisingSessionCreateWithoutExerciseInput } from "../inputs/ExercisingSessionCreateWithoutExerciseInput";
import { ExercisingSessionWhereUniqueInput } from "../inputs/ExercisingSessionWhereUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionCreateNestedManyWithoutExerciseInput", {
  isAbstract: true
})
export class ExercisingSessionCreateNestedManyWithoutExerciseInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: ExercisingSessionCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: ExercisingSessionCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: ExercisingSessionCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereUniqueInput], {
    nullable: true
  })
  connect?: ExercisingSessionWhereUniqueInput[] | undefined;
}
