import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimeBoxCreateManyExercisingSessionInputEnvelope } from "../inputs/TimeBoxCreateManyExercisingSessionInputEnvelope";
import { TimeBoxCreateOrConnectWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateOrConnectWithoutExercisingSessionInput";
import { TimeBoxCreateWithoutExercisingSessionInput } from "../inputs/TimeBoxCreateWithoutExercisingSessionInput";
import { TimeBoxWhereUniqueInput } from "../inputs/TimeBoxWhereUniqueInput";

@TypeGraphQL.InputType("TimeBoxCreateNestedManyWithoutExercisingSessionInput", {
  isAbstract: true
})
export class TimeBoxCreateNestedManyWithoutExercisingSessionInput {
  @TypeGraphQL.Field(_type => [TimeBoxCreateWithoutExercisingSessionInput], {
    nullable: true
  })
  create?: TimeBoxCreateWithoutExercisingSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxCreateOrConnectWithoutExercisingSessionInput], {
    nullable: true
  })
  connectOrCreate?: TimeBoxCreateOrConnectWithoutExercisingSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => TimeBoxCreateManyExercisingSessionInputEnvelope, {
    nullable: true
  })
  createMany?: TimeBoxCreateManyExercisingSessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TimeBoxWhereUniqueInput], {
    nullable: true
  })
  connect?: TimeBoxWhereUniqueInput[] | undefined;
}
