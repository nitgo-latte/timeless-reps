import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMuscleGroupArgs } from "./args/FindFirstMuscleGroupArgs";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class FindFirstMuscleGroupResolver {
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
}
