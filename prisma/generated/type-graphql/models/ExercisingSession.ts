import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BreathingChain } from "../models/BreathingChain";
import { Exercise } from "../models/Exercise";
import { TimeBox } from "../models/TimeBox";
import { ExercisingSessionCount } from "../resolvers/outputs/ExercisingSessionCount";

@TypeGraphQL.ObjectType("ExercisingSession", {
  isAbstract: true
})
export class ExercisingSession {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  exercise?: Exercise;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exerciseId!: number;

  TimeBox?: TimeBox[];

  BreathingChain?: BreathingChain;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  breathingChainId!: string;

  @TypeGraphQL.Field(_type => ExercisingSessionCount, {
    nullable: true
  })
  _count?: ExercisingSessionCount | null;
}
