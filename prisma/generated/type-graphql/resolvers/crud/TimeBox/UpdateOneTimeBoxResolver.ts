import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTimeBoxArgs } from "./args/UpdateOneTimeBoxArgs";
import { TimeBox } from "../../../models/TimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class UpdateOneTimeBoxResolver {
  @TypeGraphQL.Mutation(_returns => TimeBox, {
    nullable: true
  })
  async updateOneTimeBox(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTimeBoxArgs): Promise<TimeBox | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timeBox.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
