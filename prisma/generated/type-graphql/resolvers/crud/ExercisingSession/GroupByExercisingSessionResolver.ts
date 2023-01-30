import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByExercisingSessionArgs } from "./args/GroupByExercisingSessionArgs";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { ExercisingSessionGroupBy } from "../../outputs/ExercisingSessionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingSession)
export class GroupByExercisingSessionResolver {
  @TypeGraphQL.Query(_returns => [ExercisingSessionGroupBy], {
    nullable: false
  })
  async groupByExercisingSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExercisingSessionArgs): Promise<ExercisingSessionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingSession.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
