import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCreateOrConnectWithoutExercisingSessionInput } from "../inputs/ExerciseCreateOrConnectWithoutExercisingSessionInput";
import { ExerciseCreateWithoutExercisingSessionInput } from "../inputs/ExerciseCreateWithoutExercisingSessionInput";
import { ExerciseUpdateWithoutExercisingSessionInput } from "../inputs/ExerciseUpdateWithoutExercisingSessionInput";
import { ExerciseUpsertWithoutExercisingSessionInput } from "../inputs/ExerciseUpsertWithoutExercisingSessionInput";
import { ExerciseWhereUniqueInput } from "../inputs/ExerciseWhereUniqueInput";

@TypeGraphQL.InputType("ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput", {
  isAbstract: true
})
export class ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput {
  @TypeGraphQL.Field(_type => ExerciseCreateWithoutExercisingSessionInput, {
    nullable: true
  })
  create?: ExerciseCreateWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseCreateOrConnectWithoutExercisingSessionInput, {
    nullable: true
  })
  connectOrCreate?: ExerciseCreateOrConnectWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseUpsertWithoutExercisingSessionInput, {
    nullable: true
  })
  upsert?: ExerciseUpsertWithoutExercisingSessionInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseWhereUniqueInput, {
    nullable: true
  })
  connect?: ExerciseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExerciseUpdateWithoutExercisingSessionInput, {
    nullable: true
  })
  update?: ExerciseUpdateWithoutExercisingSessionInput | undefined;
}
