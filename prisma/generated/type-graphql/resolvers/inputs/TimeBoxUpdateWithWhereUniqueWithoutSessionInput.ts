import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxUpdateWithoutSessionInput } from "../inputs/TimeBoxUpdateWithoutSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxUpdateWithWhereUniqueWithoutSessionInput", {
  isAbstract: true
})
export class TimeBoxUpdateWithWhereUniqueWithoutSessionInput {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxUpdateWithoutSessionInput, {
    nullable: false
  })
  data!: TimeBoxUpdateWithoutSessionInput;
}
