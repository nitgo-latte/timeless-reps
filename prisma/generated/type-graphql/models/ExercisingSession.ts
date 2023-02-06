import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exercise } from "../models/Exercise";
import { TimeBox } from "../models/TimeBox";
import { ExercisingSessionCount } from "../resolvers/outputs/ExercisingSessionCount";

@TypeGraphQL.ObjectType("ExercisingSession", {
  isAbstract: true
})
export class ExercisingSession {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  exercise?: Exercise | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exerciseId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;

  TimeBox?: TimeBox[];

  @TypeGraphQL.Field(_type => ExercisingSessionCount, {
    nullable: true
  })
  _count?: ExercisingSessionCount | null;
}
