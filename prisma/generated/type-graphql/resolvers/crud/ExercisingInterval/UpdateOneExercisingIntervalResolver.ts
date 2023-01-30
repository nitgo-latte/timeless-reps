import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneExercisingIntervalArgs } from "./args/UpdateOneExercisingIntervalArgs";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class UpdateOneExercisingIntervalResolver {
  @TypeGraphQL.Mutation(_returns => ExercisingInterval, {
    nullable: true
  })
  async updateOneExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneExercisingIntervalArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
