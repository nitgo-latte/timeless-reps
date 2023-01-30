import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateWithoutSessionInput } from "../inputs/TimeBoxCreateWithoutSessionInput";
import { TimeBoxUpdateWithoutSessionInput } from "../inputs/TimeBoxUpdateWithoutSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxUpsertWithWhereUniqueWithoutSessionInput", {
  isAbstract: true
})
export class TimeBoxUpsertWithWhereUniqueWithoutSessionInput {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxUpdateWithoutSessionInput, {
    nullable: false
  })
  update!: TimeBoxUpdateWithoutSessionInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutSessionInput, {
    nullable: false
  })
  create!: TimeBoxCreateWithoutSessionInput;
}
