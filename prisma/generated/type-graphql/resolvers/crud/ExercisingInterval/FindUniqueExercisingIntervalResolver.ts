import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExercisingIntervalArgs } from "./args/FindUniqueExercisingIntervalArgs";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class FindUniqueExercisingIntervalResolver {
  @TypeGraphQL.Query(_returns => ExercisingInterval, {
    nullable: true
  })
  async exercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExercisingIntervalArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
