import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByExercisingIntervalArgs } from "./args/GroupByExercisingIntervalArgs";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { ExercisingIntervalGroupBy } from "../../outputs/ExercisingIntervalGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class GroupByExercisingIntervalResolver {
  @TypeGraphQL.Query(_returns => [ExercisingIntervalGroupBy], {
    nullable: false
  })
  async groupByExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExercisingIntervalArgs): Promise<ExercisingIntervalGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
