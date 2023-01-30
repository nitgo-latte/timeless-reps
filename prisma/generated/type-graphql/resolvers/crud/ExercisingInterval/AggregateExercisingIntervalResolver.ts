import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExercisingIntervalArgs } from "./args/AggregateExercisingIntervalArgs";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { AggregateExercisingInterval } from "../../outputs/AggregateExercisingInterval";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class AggregateExercisingIntervalResolver {
  @TypeGraphQL.Query(_returns => AggregateExercisingInterval, {
    nullable: false
  })
  async aggregateExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExercisingIntervalArgs): Promise<AggregateExercisingInterval> {
    return getPrismaFromContext(ctx).exercisingInterval.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
