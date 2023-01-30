import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTimeBoxOrThrowArgs } from "./args/FindFirstTimeBoxOrThrowArgs";
import { TimeBox } from "../../../models/TimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class FindFirstTimeBoxOrThrowResolver {
  @TypeGraphQL.Query(_returns => TimeBox, {
    nullable: true
  })
  async findFirstTimeBoxOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTimeBoxOrThrowArgs): Promise<TimeBox | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).timeBox.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
