import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BreathingChainCountAggregate } from "../outputs/BreathingChainCountAggregate";
import { BreathingChainMaxAggregate } from "../outputs/BreathingChainMaxAggregate";
import { BreathingChainMinAggregate } from "../outputs/BreathingChainMinAggregate";

@TypeGraphQL.ObjectType("BreathingChainGroupBy", {
  isAbstract: true
})
export class BreathingChainGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => BreathingChainCountAggregate, {
    nullable: true
  })
  _count!: BreathingChainCountAggregate | null;

  @TypeGraphQL.Field(_type => BreathingChainMinAggregate, {
    nullable: true
  })
  _min!: BreathingChainMinAggregate | null;

  @TypeGraphQL.Field(_type => BreathingChainMaxAggregate, {
    nullable: true
  })
  _max!: BreathingChainMaxAggregate | null;
}
