import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByBreathingChainArgs } from "./args/GroupByBreathingChainArgs";
import { BreathingChain } from "../../../models/BreathingChain";
import { BreathingChainGroupBy } from "../../outputs/BreathingChainGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BreathingChain)
export class GroupByBreathingChainResolver {
  @TypeGraphQL.Query(_returns => [BreathingChainGroupBy], {
    nullable: false
  })
  async groupByBreathingChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBreathingChainArgs): Promise<BreathingChainGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).breathingChain.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
