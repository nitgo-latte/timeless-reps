import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateManyExercisingSessionInput } from "../inputs/TimeBoxCreateManyExercisingSessionInput";

@TypeGraphQL.InputType("TimeBoxCreateManyExercisingSessionInputEnvelope", {
  isAbstract: true
})
export class TimeBoxCreateManyExercisingSessionInputEnvelope {
  @TypeGraphQL.Field(_type => [TimeBoxCreateManyExercisingSessionInput], {
    nullable: false
  })
  data!: TimeBoxCreateManyExercisingSessionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
