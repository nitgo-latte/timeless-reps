import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateManyExercisingSessionInputEnvelope } from "../inputs/TimeBoxCreateManyExercisingSessionInputEnvelope";
import { TimeBoxCreateOrConnectWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateOrConnectWithoutExercisingSessionInput";
import { TimeBoxCreateWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateWithoutExercisingSessionInput";
import { TimeBoxScalarWhereInput } from "../inputs/TimeBoxScalarWhereInput";
import { TimeBoxUpdateManyWithWhereWithoutExercisingSessionInput } from "../inputs/TimeBoxUpdateManyWithWhereWithoutExercisingSessionInput";
import { TimeBoxUpdateWithWhereUniqueWithoutExercisingSessionInput } from "../inputs/TimeBoxUpdateWithWhereUniqueWithoutExercisingSessionInput";
import { TimeBoxUpsertWithWhereUniqueWithoutExercisingSessionInput } from "../inputs/TimeBoxUpsertWithWhereUniqueWithoutExercisingSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxUpdateManyWithoutExercisingSessionNestedInput", {
  isAbstract: true
})
export class TimeBoxUpdateManyWithoutExercisingSessionNestedInput {
  @TypeGraphQL.Field(_type => [TimeBoxCreateWithoutExercisingSessionInput], {
    nullable: true
  })
  create?: TimeBoxCreateWithoutExercisingSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxCreateOrConnectWithoutExercisingSessionInput], {
    nullable: true
  })
  connectOrCreate?: TimeBoxCreateOrConnectWithoutExercisingSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxUpsertWithWhereUniqueWithoutExercisingSessionInput], {
    nullable: true
  })
  upsert?: TimeBoxUpsertWithWhereUniqueWithoutExercisingSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateManyExercisingSessionInputEnvelope, {
    nullable: true
  })
  createMany?: TimeBoxCreateManyExercisingSessionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TimeBoxUpdateWithWhereUniqueWithoutExercisingSessionInput], {
    nullable: true
  })
  update?: TimeBoxUpdateWithWhereUniqueWithoutExercisingSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxUpdateManyWithWhereWithoutExercisingSessionInput], {
    nullable: true
  })
  updateMany?: TimeBoxUpdateManyWithWhereWithoutExercisingSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TimeBoxScalarWhereInput[] | undefined;
}
