import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingIntervalCreateNestedOneWithoutTimeBoxInput } from "../inputs/ExercisingIntervalCreateNestedOneWithoutTimeBoxInput";

@TypeGraphQL.InputType("TimeBoxCreateWithoutSessionInput", {
  isAbstract: true
})
export class TimeBoxCreateWithoutSessionInput {
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

  @TypeGraphQL.Field(_type => ExercisingIntervalCreateNestedOneWithoutTimeBoxInput, {
    nullable: true
  })
  interval?: ExercisingIntervalCreateNestedOneWithoutTimeBoxInput | undefined;
}
