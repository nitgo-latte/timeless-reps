import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateWithoutExercisingSessionInput";
import { TimeBoxUpdateWithoutExercisingSessionInput } from "../inputs/TimeBoxUpdateWithoutExercisingSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxUpsertWithWhereUniqueWithoutExercisingSessionInput", {
  isAbstract: true
})
export class TimeBoxUpsertWithWhereUniqueWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => TimeBoxWhereUniqueInput, {
    nullable: false
  })
  where!: TimeBoxWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimeBoxUpdateWithoutExercisingSessionInput, {
    nullable: false
  })
  update!: TimeBoxUpdateWithoutExercisingSessionInput;

  @TypeGraphQL.Field(_type => TimeBoxCreateWithoutExercisingSessionInput, {
    nullable: false
  })
  create!: TimeBoxCreateWithoutExercisingSessionInput;
}
