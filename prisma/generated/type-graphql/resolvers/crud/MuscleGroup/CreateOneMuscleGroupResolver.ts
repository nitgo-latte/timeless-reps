import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMuscleGroupArgs } from "./args/CreateOneMuscleGroupArgs";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class CreateOneMuscleGroupResolver {
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
}
