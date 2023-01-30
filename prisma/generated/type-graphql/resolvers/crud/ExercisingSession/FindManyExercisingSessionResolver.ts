import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyExercisingSessionArgs } from "./args/FindManyExercisingSessionArgs";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingSession)
export class FindManyExercisingSessionResolver {
  @TypeGraphQL.Query(_returns => [ExercisingSession], {
    nullable: false
  })
  async exercisingSessions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExercisingSessionArgs): Promise<ExercisingSession[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingSession.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
