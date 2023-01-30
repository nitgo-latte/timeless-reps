import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxScalarWhereInput } from "../inputs/TimeBoxScalarWhereInput";
import { TimeBoxUpdateManyMutationInput } from "../inputs/TimeBoxUpdateManyMutationInput";

@TypeGraphQL.InputType("TimeBoxUpdateManyWithWhereWithoutSessionInput", {
  isAbstract: true
})
export class TimeBoxUpdateManyWithWhereWithoutSessionInput {
  @TypeGraphQL.Field(_type => TimeBoxScalarWhereInput, {
    nullable: false
  })
  where!: TimeBoxScalarWhereInput;

  @TypeGraphQL.Field(_type => TimeBoxUpdateManyMutationInput, {
    nullable: false
  })
  data!: TimeBoxUpdateManyMutationInput;
}
