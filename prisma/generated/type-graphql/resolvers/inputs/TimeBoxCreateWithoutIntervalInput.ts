import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateNestedOneWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateNestedOneWithoutTimeBoxInput";

@TypeGraphQL.InputType("TimeBoxCreateWithoutIntervalInput", {
  isAbstract: true
})
export class TimeBoxCreateWithoutIntervalInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateNestedOneWithoutTimeBoxInput, {
    nullable: false
  })
  session!: ExercisingSessionCreateNestedOneWithoutTimeBoxInput;
}
