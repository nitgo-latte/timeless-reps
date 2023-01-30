import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTimeBoxArgs } from "./args/DeleteOneTimeBoxArgs";
import { TimeBox } from "../../../models/TimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class DeleteOneTimeBoxResolver {
  @TypeGraphQL.Mutation(_returns => TimeBox, {
    nullable: true
  })
  async deleteOneTimeBox(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTimeBoxArgs): Promise<TimeBox | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timeBox.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
