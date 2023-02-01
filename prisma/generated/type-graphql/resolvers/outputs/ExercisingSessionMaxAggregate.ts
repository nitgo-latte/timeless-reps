import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ExercisingSessionMaxAggregate", {
  isAbstract: true
})
export class ExercisingSessionMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exerciseId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message!: string | null;
}
