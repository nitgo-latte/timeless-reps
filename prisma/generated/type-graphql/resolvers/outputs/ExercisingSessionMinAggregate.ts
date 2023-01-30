import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ExercisingSessionMinAggregate", {
  isAbstract: true
})
export class ExercisingSessionMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  exerciseId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  breathingChainId!: string | null;
}
