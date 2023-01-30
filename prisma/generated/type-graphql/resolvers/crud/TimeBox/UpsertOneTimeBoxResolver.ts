import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTimeBoxArgs } from "./args/UpsertOneTimeBoxArgs";
import { TimeBox } from "../../../models/TimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class UpsertOneTimeBoxResolver {
  @TypeGraphQL.Mutation(_returns => TimeBox, {
    nullable: false
  })
  async upsertOneTimeBox(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTimeBoxArgs): Promise<TimeBox> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timeBox.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
