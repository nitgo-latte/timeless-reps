import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MuscleGroupCreateWithoutExercisesInput", {
  isAbstract: true
})
export class MuscleGroupCreateWithoutExercisesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
