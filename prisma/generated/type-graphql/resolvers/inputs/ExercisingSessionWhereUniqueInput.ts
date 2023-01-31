import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionExerciseIdBreathingChainIdCompoundUniqueInput } from "../inputs/ExercisingSessionExerciseIdBreathingChainIdCompoundUniqueInput";

@TypeGraphQL.InputType("ExercisingSessionWhereUniqueInput", {
  isAbstract: true
})
export class ExercisingSessionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionExerciseIdBreathingChainIdCompoundUniqueInput, {
    nullable: true
  })
  exerciseId_breathingChainId?: ExercisingSessionExerciseIdBreathingChainIdCompoundUniqueInput | undefined;
}
