import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMuscleGroupArgs } from "./args/AggregateMuscleGroupArgs";
import { CreateManyMuscleGroupArgs } from "./args/CreateManyMuscleGroupArgs";
import { CreateOneMuscleGroupArgs } from "./args/CreateOneMuscleGroupArgs";
import { DeleteManyMuscleGroupArgs } from "./args/DeleteManyMuscleGroupArgs";
import { DeleteOneMuscleGroupArgs } from "./args/DeleteOneMuscleGroupArgs";
import { FindFirstMuscleGroupArgs } from "./args/FindFirstMuscleGroupArgs";
import { FindFirstMuscleGroupOrThrowArgs } from "./args/FindFirstMuscleGroupOrThrowArgs";
import { FindManyMuscleGroupArgs } from "./args/FindManyMuscleGroupArgs";
import { FindUniqueMuscleGroupArgs } from "./args/FindUniqueMuscleGroupArgs";
import { FindUniqueMuscleGroupOrThrowArgs } from "./args/FindUniqueMuscleGroupOrThrowArgs";
import { GroupByMuscleGroupArgs } from "./args/GroupByMuscleGroupArgs";
import { UpdateManyMuscleGroupArgs } from "./args/UpdateManyMuscleGroupArgs";
import { UpdateOneMuscleGroupArgs } from "./args/UpdateOneMuscleGroupArgs";
import { UpsertOneMuscleGroupArgs } from "./args/UpsertOneMuscleGroupArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMuscleGroup } from "../../outputs/AggregateMuscleGroup";
import { MuscleGroupGroupBy } from "../../outputs/MuscleGroupGroupBy";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class MuscleGroupCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMuscleGroup, {
    nullable: false
  })
  async aggregateMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMuscleGroupArgs): Promise<AggregateMuscleGroup> {
    return getPrismaFromContext(ctx).muscleGroup.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMuscleGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MuscleGroup, {
    nullable: false
  })
  async createOneMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMuscleGroupArgs): Promise<MuscleGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMuscleGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MuscleGroup, {
    nullable: true
  })
  async deleteOneMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMuscleGroupArgs): Promise<MuscleGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MuscleGroup, {
    nullable: true
  })
  async findFirstMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMuscleGroupArgs): Promise<MuscleGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MuscleGroup, {
    nullable: true
  })
  async findFirstMuscleGroupOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMuscleGroupOrThrowArgs): Promise<MuscleGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MuscleGroup], {
    nullable: false
  })
  async muscleGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMuscleGroupArgs): Promise<MuscleGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MuscleGroup, {
    nullable: true
  })
  async muscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMuscleGroupArgs): Promise<MuscleGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MuscleGroup, {
    nullable: true
  })
  async getMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMuscleGroupOrThrowArgs): Promise<MuscleGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MuscleGroupGroupBy], {
    nullable: false
  })
  async groupByMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMuscleGroupArgs): Promise<MuscleGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMuscleGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MuscleGroup, {
    nullable: true
  })
  async updateOneMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMuscleGroupArgs): Promise<MuscleGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MuscleGroup, {
    nullable: false
  })
  async upsertOneMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMuscleGroupArgs): Promise<MuscleGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).muscleGroup.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
