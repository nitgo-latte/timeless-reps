import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMuscleGroupOrThrowArgs } from "./args/FindFirstMuscleGroupOrThrowArgs";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class FindFirstMuscleGroupOrThrowResolver {
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
}
