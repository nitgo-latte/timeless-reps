import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TimeBoxCreateManyExercisingSessionInput", {
  isAbstract: true
})
export class TimeBoxCreateManyExercisingSessionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  end!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  resting?: boolean | undefined;
}
