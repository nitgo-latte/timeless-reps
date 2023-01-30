import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMuscleGroupArgs } from "./args/AggregateMuscleGroupArgs";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { AggregateMuscleGroup } from "../../outputs/AggregateMuscleGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class AggregateMuscleGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateMuscleGroup, {
    nullable: false
  })
  async aggregateMuscleGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMuscleGroupArgs): Promise<AggregateMuscleGroup> {
    return getPrismaFromContext(ctx).muscleGroup.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
