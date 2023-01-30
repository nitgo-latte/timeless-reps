import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneExercisingSessionArgs } from "./args/CreateOneExercisingSessionArgs";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingSession)
export class CreateOneExercisingSessionResolver {
  @TypeGraphQL.Mutation(_returns => ExercisingSession, {
    nullable: false
  })
  async createOneExercisingSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExercisingSessionArgs): Promise<ExercisingSession> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingSession.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
