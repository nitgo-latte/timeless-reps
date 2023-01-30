import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBreathingChainArgs } from "./args/FindUniqueBreathingChainArgs";
import { BreathingChain } from "../../../models/BreathingChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BreathingChain)
export class FindUniqueBreathingChainResolver {
  @TypeGraphQL.Query(_returns => BreathingChain, {
    nullable: true
  })
  async breathingChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBreathingChainArgs): Promise<BreathingChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).breathingChain.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
