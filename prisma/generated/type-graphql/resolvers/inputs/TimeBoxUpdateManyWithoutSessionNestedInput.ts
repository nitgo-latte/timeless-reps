import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateManySessionInputEnvelope } from "../inputs/TimeBoxCreateManySessionInputEnvelope";
import { TimeBoxCreateOrConnectWithoutSessionInput } from "../inputs/TimeBoxCreateOrConnectWithoutSessionInput";
import { TimeBoxCreateWithoutSessionInput } from "../inputs/TimeBoxCreateWithoutSessionInput";
import { TimeBoxScalarWhereInput } from "../inputs/TimeBoxScalarWhereInput";
import { TimeBoxUpdateManyWithWhereWithoutSessionInput } from "../inputs/TimeBoxUpdateManyWithWhereWithoutSessionInput";
import { TimeBoxUpdateWithWhereUniqueWithoutSessionInput } from "../inputs/TimeBoxUpdateWithWhereUniqueWithoutSessionInput";
import { TimeBoxUpsertWithWhereUniqueWithoutSessionInput } from "../inputs/TimeBoxUpsertWithWhereUniqueWithoutSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxUpdateManyWithoutSessionNestedInput", {
  isAbstract: true
})
export class TimeBoxUpdateManyWithoutSessionNestedInput {
  @TypeGraphQL.Field(_type => [TimeBoxCreateWithoutSessionInput], {
    nullable: true
  })
  create?: TimeBoxCreateWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxCreateOrConnectWithoutSessionInput], {
    nullable: true
  })
  connectOrCreate?: TimeBoxCreateOrConnectWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxUpsertWithWhereUniqueWithoutSessionInput], {
    nullable: true
  })
  upsert?: TimeBoxUpsertWithWhereUniqueWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateManySessionInputEnvelope, {
    nullable: true
  })
  createMany?: TimeBoxCreateManySessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereUniqueInput], {
    nullable: true
  })
  set?: TimeBoxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TimeBoxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereUniqueInput], {
    nullable: true
  })
  delete?: TimeBoxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereUniqueInput], {
    nullable: true
  })
  connect?: TimeBoxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxUpdateWithWhereUniqueWithoutSessionInput], {
    nullable: true
  })
  update?: TimeBoxUpdateWithWhereUniqueWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxUpdateManyWithWhereWithoutSessionInput], {
    nullable: true
  })
  updateMany?: TimeBoxUpdateManyWithWhereWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TimeBoxScalarWhereInput[] | undefined;
}
