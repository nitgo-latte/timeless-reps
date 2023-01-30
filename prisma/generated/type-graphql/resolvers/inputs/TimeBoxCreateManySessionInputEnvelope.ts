import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateManySessionInput } from "../inputs/TimeBoxCreateManySessionInput";

@TypeGraphQL.InputType("TimeBoxCreateManySessionInputEnvelope", {
  isAbstract: true
})
export class TimeBoxCreateManySessionInputEnvelope {
  @TypeGraphQL.Field(_type => [TimeBoxCreateManySessionInput], {
    nullable: false
  })
  data!: TimeBoxCreateManySessionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
