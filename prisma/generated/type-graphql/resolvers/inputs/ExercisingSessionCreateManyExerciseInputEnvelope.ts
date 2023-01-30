import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateManyExerciseInput } from "../inputs/ExercisingSessionCreateManyExerciseInput";

@TypeGraphQL.InputType("ExercisingSessionCreateManyExerciseInputEnvelope", {
  isAbstract: true
})
export class ExercisingSessionCreateManyExerciseInputEnvelope {
  @TypeGraphQL.Field(_type => [ExercisingSessionCreateManyExerciseInput], {
    nullable: false
  })
  data!: ExercisingSessionCreateManyExerciseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
