import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTimeBoxArgs } from "./args/GroupByTimeBoxArgs";
import { TimeBox } from "../../../models/TimeBox";
import { TimeBoxGroupBy } from "../../outputs/TimeBoxGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class GroupByTimeBoxResolver {
  @TypeGraphQL.Query(_returns => [TimeBoxGroupBy], {
    nullable: false
  })
  async groupByTimeBox(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTimeBoxArgs): Promise<TimeBoxGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timeBox.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
