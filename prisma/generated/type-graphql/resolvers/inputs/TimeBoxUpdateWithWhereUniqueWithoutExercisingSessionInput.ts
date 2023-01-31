import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxUpdateWithoutExercisingSessionInput } from "../inputs/TimeBoxUpdateWithoutExercisingSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxUpdateWithWhereUniqueWithoutExercisingSessionInput", {
  isAbstract: true
})
export class TimeBoxUpdateWithWhereUniqueWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxUpdateWithoutExercisingSessionInput, {
    nullable: false
  })
  data!: TimeBoxUpdateWithoutExercisingSessionInput;
}
