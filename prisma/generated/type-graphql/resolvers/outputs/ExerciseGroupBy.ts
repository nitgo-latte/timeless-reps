import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseCountAggregate } from "../outputs/ExerciseCountAggregate";
import { ExerciseMaxAggregate } from "../outputs/ExerciseMaxAggregate";
import { ExerciseMinAggregate } from "../outputs/ExerciseMinAggregate";
import { Difficulty } from "../../enums/Difficulty";

@TypeGraphQL.ObjectType("ExerciseGroupBy", {
  isAbstract: true
})
export class ExerciseGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Difficulty, {
    nullable: false
  })
  difficulty!: "EASY" | "MEDIUM" | "HARD";

  @TypeGraphQL.Field(_type => ExerciseCountAggregate, {
    nullable: true
  })
  _count!: ExerciseCountAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseMinAggregate, {
    nullable: true
  })
  _min!: ExerciseMinAggregate | null;

  @TypeGraphQL.Field(_type => ExerciseMaxAggregate, {
    nullable: true
  })
  _max!: ExerciseMaxAggregate | null;
}
