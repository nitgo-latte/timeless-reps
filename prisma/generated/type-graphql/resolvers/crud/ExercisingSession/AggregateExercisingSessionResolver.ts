import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExercisingSessionArgs } from "./args/AggregateExercisingSessionArgs";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { AggregateExercisingSession } from "../../outputs/AggregateExercisingSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingSession)
export class AggregateExercisingSessionResolver {
  @TypeGraphQL.Query(_returns => AggregateExercisingSession, {
    nullable: false
  })
  async aggregateExercisingSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExercisingSessionArgs): Promise<AggregateExercisingSession> {
    return getPrismaFromContext(ctx).exercisingSession.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
