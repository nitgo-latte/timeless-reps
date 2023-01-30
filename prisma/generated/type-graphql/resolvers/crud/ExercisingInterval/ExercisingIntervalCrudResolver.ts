import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExercisingIntervalArgs } from "./args/AggregateExercisingIntervalArgs";
import { CreateManyExercisingIntervalArgs } from "./args/CreateManyExercisingIntervalArgs";
import { CreateOneExercisingIntervalArgs } from "./args/CreateOneExercisingIntervalArgs";
import { DeleteManyExercisingIntervalArgs } from "./args/DeleteManyExercisingIntervalArgs";
import { DeleteOneExercisingIntervalArgs } from "./args/DeleteOneExercisingIntervalArgs";
import { FindFirstExercisingIntervalArgs } from "./args/FindFirstExercisingIntervalArgs";
import { FindFirstExercisingIntervalOrThrowArgs } from "./args/FindFirstExercisingIntervalOrThrowArgs";
import { FindManyExercisingIntervalArgs } from "./args/FindManyExercisingIntervalArgs";
import { FindUniqueExercisingIntervalArgs } from "./args/FindUniqueExercisingIntervalArgs";
import { FindUniqueExercisingIntervalOrThrowArgs } from "./args/FindUniqueExercisingIntervalOrThrowArgs";
import { GroupByExercisingIntervalArgs } from "./args/GroupByExercisingIntervalArgs";
import { UpdateManyExercisingIntervalArgs } from "./args/UpdateManyExercisingIntervalArgs";
import { UpdateOneExercisingIntervalArgs } from "./args/UpdateOneExercisingIntervalArgs";
import { UpsertOneExercisingIntervalArgs } from "./args/UpsertOneExercisingIntervalArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExercisingInterval } from "../../outputs/AggregateExercisingInterval";
import { ExercisingIntervalGroupBy } from "../../outputs/ExercisingIntervalGroupBy";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class ExercisingIntervalCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateExercisingInterval, {
    nullable: false
  })
  async aggregateExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExercisingIntervalArgs): Promise<AggregateExercisingInterval> {
    return getPrismaFromContext(ctx).exercisingInterval.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyExercisingIntervalArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyExercisingIntervalArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExercisingInterval, {
    nullable: true
  })
  async deleteOneExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExercisingIntervalArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExercisingInterval, {
    nullable: true
  })
  async findFirstExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExercisingIntervalArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExercisingInterval, {
    nullable: true
  })
  async findFirstExercisingIntervalOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExercisingIntervalOrThrowArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExercisingInterval], {
    nullable: false
  })
  async exercisingIntervals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExercisingIntervalArgs): Promise<ExercisingInterval[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExercisingInterval, {
    nullable: true
  })
  async exercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExercisingIntervalArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExercisingInterval, {
    nullable: true
  })
  async getExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExercisingIntervalOrThrowArgs): Promise<ExercisingInterval | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExercisingIntervalGroupBy], {
    nullable: false
  })
  async groupByExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExercisingIntervalArgs): Promise<ExercisingIntervalGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyExercisingIntervalArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => ExercisingInterval, {
    nullable: false
  })
  async upsertOneExercisingInterval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneExercisingIntervalArgs): Promise<ExercisingInterval> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).exercisingInterval.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
