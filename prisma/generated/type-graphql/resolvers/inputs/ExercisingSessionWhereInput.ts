import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainRelationFilter } from "../inputs/BreathingChainRelationFilter";
import { ExerciseRelationFilter } from "../inputs/ExerciseRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TimeBoxListRelationFilter } from "../inputs/TimeBoxListRelationFilter";

@TypeGraphQL.InputType("ExercisingSessionWhereInput", {
  isAbstract: true
})
export class ExercisingSessionWhereInput {
  @TypeGraphQL.Field(_type => [ExercisingSessionWhereInput], {
    nullable: true
  })
  AND?: ExercisingSessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereInput], {
    nullable: true
  })
  OR?: ExercisingSessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisingSessionWhereInput], {
    nullable: true
  })
  NOT?: ExercisingSessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ExerciseRelationFilter, {
    nullable: true
  })
  exercise?: ExerciseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  exerciseId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TimeBoxListRelationFilter, {
    nullable: true
  })
  TimeBox?: TimeBoxListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BreathingChainRelationFilter, {
    nullable: true
  })
  BreathingChain?: BreathingChainRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  breathingChainId?: StringFilter | undefined;
}
