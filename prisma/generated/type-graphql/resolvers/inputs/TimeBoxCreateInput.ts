import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisingSessionCreateNestedOneWithoutTimeBoxInput } from "../inputs/ExercisingSessionCreateNestedOneWithoutTimeBoxInput";

@TypeGraphQL.InputType("TimeBoxCreateInput", {
  isAbstract: true
})
export class TimeBoxCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  end!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  resting?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExercisingSessionCreateNestedOneWithoutTimeBoxInput, {
    nullable: true
  })
  exercisingSession?: ExercisingSessionCreateNestedOneWithoutTimeBoxInput | undefined;
}
