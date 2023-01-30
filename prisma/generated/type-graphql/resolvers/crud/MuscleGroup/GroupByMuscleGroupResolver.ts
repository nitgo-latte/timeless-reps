import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMuscleGroupArgs } from "./args/GroupByMuscleGroupArgs";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { MuscleGroupGroupBy } from "../../outputs/MuscleGroupGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class GroupByMuscleGroupResolver {
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
}
