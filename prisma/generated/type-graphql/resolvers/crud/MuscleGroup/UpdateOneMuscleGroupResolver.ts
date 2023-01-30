import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMuscleGroupArgs } from "./args/UpdateOneMuscleGroupArgs";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class UpdateOneMuscleGroupResolver {
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
}
