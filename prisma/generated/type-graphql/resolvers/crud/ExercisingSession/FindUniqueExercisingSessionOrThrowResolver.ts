import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExercisingSessionOrThrowArgs } from "./args/FindUniqueExercisingSessionOrThrowArgs";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingSession)
export class FindUniqueExercisingSessionOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExercisingSession, {
    nullable: true
  })
  async getExercisingSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExercisingSessionOrThrowArgs): Promise<ExercisingSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingSession.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
