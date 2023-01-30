import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateOrConnectWithoutExercisingSessionInput } from "../inputs/ExerciseCreateOrConnectWithoutExercisingSessionInput";
import { ExerciseCreateWithoutExercisingSessionInput } from "../inputs/ExerciseCreateWithoutExercisingSessionInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseCreateNestedOneWithoutExercisingSessionInput", {
  isAbstract: true
})
export class ExerciseCreateNestedOneWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => ExerciseCreateWithoutExercisingSessionInput, {
    nullable: true
  })
  create?: ExerciseCreateWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseCreateOrConnectWithoutExercisingSessionInput, {
    nullable: true
  })
  connectOrCreate?: ExerciseCreateOrConnectWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: true
  })
  connect?: ExerciseWhereUniqueInput | undefined;
}
