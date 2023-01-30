import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateWithoutSessionInput } from "../inputs/TimeBoxCreateWithoutSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxCreateOrConnectWithoutSessionInput", {
  isAbstract: true
})
export class TimeBoxCreateOrConnectWithoutSessionInput {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutSessionInput, {
    nullable: false
  })
  create!: TimeBoxCreateWithoutSessionInput;
}
