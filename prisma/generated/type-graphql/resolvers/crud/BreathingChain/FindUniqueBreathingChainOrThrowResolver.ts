import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBreathingChainOrThrowArgs } from "./args/FindUniqueBreathingChainOrThrowArgs";
import { BreathingChain } from "../../../models/BreathingChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BreathingChain)
export class FindUniqueBreathingChainOrThrowResolver {
  @TypeGraphQL.Query(_returns => BreathingChain, {
    nullable: true
  })
  async getBreathingChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBreathingChainOrThrowArgs): Promise<BreathingChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).breathingChain.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
