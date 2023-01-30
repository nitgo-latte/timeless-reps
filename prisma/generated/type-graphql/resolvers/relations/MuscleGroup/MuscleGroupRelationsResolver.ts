import * as TypeGraphQL from "type-graphql";
import { Exercise } from "../../../models/Exercise";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { MuscleGroupExercisesArgs } from "./args/MuscleGroupExercisesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MuscleGroup)
export class MuscleGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Exercise], {
    nullable: false
  })
  async exercises(@TypeGraphQL.Root() muscleGroup: MuscleGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MuscleGroupExercisesArgs): Promise<Exercise[]> {
    return getPrismaFromContext(ctx).muscleGroup.findUnique({
      where: {
        id: muscleGroup.id,
      },
    }).exercises(args);
  }
}
