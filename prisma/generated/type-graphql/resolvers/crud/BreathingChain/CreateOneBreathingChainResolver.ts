import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBreathingChainArgs } from "./args/CreateOneBreathingChainArgs";
import { BreathingChain } from "../../../models/BreathingChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BreathingChain)
export class CreateOneBreathingChainResolver {
  @TypeGraphQL.Mutation(_returns => BreathingChain, {
    nullable: false
  })
  async createOneBreathingChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneBreathingChainArgs): Promise<BreathingChain> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).breathingChain.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
