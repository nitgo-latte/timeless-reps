import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTimeBoxArgs } from "./args/AggregateTimeBoxArgs";
import { TimeBox } from "../../../models/TimeBox";
import { AggregateTimeBox } from "../../outputs/AggregateTimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class AggregateTimeBoxResolver {
  @TypeGraphQL.Query(_returns => AggregateTimeBox, {
    nullable: false
  })
  async aggregateTimeBox(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTimeBoxArgs): Promise<AggregateTimeBox> {
    return getPrismaFromContext(ctx).timeBox.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
