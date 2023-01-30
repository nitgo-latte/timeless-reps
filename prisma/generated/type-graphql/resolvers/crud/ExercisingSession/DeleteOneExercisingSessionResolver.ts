import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneExercisingSessionArgs } from "./args/DeleteOneExercisingSessionArgs";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingSession)
export class DeleteOneExercisingSessionResolver {
  @TypeGraphQL.Mutation(_returns => ExercisingSession, {
    nullable: true
  })
  async deleteOneExercisingSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExercisingSessionArgs): Promise<ExercisingSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingSession.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
