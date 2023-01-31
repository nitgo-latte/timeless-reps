import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ExercisingSessionExerciseIdBreathingChainIdCompoundUniqueInput", {
  isAbstract: true
})
export class ExercisingSessionExerciseIdBreathingChainIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exerciseId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  breathingChainId!: string;
}
