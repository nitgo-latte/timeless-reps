import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneExercisingIntervalArgs } from "./args/CreateOneExercisingIntervalArgs";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class CreateOneExercisingIntervalResolver {
  @TypeGraphQL.Mutation(_returns => ExercisingInterval, {
    nullable: false
  })
  async createOneExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExercisingIntervalArgs): Promise<ExercisingInterval> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
