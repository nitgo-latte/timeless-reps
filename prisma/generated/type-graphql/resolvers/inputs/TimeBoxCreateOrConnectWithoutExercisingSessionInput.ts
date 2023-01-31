import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateWithoutExercisingSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxCreateOrConnectWithoutExercisingSessionInput", {
  isAbstract: true
})
export class TimeBoxCreateOrConnectWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutExercisingSessionInput, {
    nullable: false
  })
  create!: TimeBoxCreateWithoutExercisingSessionInput;
}
