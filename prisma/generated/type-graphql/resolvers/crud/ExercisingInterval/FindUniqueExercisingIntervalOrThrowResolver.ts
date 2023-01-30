import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExercisingIntervalOrThrowArgs } from "./args/FindUniqueExercisingIntervalOrThrowArgs";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class FindUniqueExercisingIntervalOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExercisingInterval, {
    nullable: true
  })
  async getExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExercisingIntervalOrThrowArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
