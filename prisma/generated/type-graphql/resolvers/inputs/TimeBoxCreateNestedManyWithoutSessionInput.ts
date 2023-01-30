import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateManySessionInputEnvelope } from "../inputs/TimeBoxCreateManySessionInputEnvelope";
import { TimeBoxCreateOrConnectWithoutSessionInput } from "../inputs/TimeBoxCreateOrConnectWithoutSessionInput";
import { TimeBoxCreateWithoutSessionInput } from "../inputs/TimeBoxCreateWithoutSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxCreateNestedManyWithoutSessionInput", {
  isAbstract: true
})
export class TimeBoxCreateNestedManyWithoutSessionInput {
  @TypeGraphQL.Field(_type => [TimeBoxCreateWithoutSessionInput], {
    nullable: true
  })
  create?: TimeBoxCreateWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxCreateOrConnectWithoutSessionInput], {
    nullable: true
  })
  connectOrCreate?: TimeBoxCreateOrConnectWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateManySessionInputEnvelope, {
    nullable: true
  })
  createMany?: TimeBoxCreateManySessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereUniqueInput], {
    nullable: true
  })
  connect?: TimeBoxWhereUniqueInput[] | undefined;
}
