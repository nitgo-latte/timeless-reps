import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBreathingChainArgs } from "./args/AggregateBreathingChainArgs";
import { BreathingChain } from "../../../models/BreathingChain";
import { AggregateBreathingChain } from "../../outputs/AggregateBreathingChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BreathingChain)
export class AggregateBreathingChainResolver {
  @TypeGraphQL.Query(_returns => AggregateBreathingChain, {
    nullable: false
  })
  async aggregateBreathingChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBreathingChainArgs): Promise<AggregateBreathingChain> {
    return getPrismaFromContext(ctx).breathingChain.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
