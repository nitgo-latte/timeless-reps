import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstExercisingIntervalArgs } from "./args/FindFirstExercisingIntervalArgs";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class FindFirstExercisingIntervalResolver {
  @TypeGraphQL.Query(_returns => ExercisingInterval, {
    nullable: true
  })
  async findFirstExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExercisingIntervalArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
