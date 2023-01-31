import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExercisingSession } from "../models/ExercisingSession";
import { BreathingChainCount } from "../resolvers/outputs/BreathingChainCount";

@TypeGraphQL.ObjectType("BreathingChain", {
  isAbstract: true
})
export class BreathingChain {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  exercisingSessions?: ExercisingSession[];

  @TypeGraphQL.Field(_type => BreathingChainCount, {
    nullable: true
  })
  _count?: BreathingChainCount | null;
}
