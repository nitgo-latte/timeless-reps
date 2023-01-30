import * as TypeGraphQL from "type-graphql";
import { Exercise } from "../../../models/Exercise";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { MuscleGroup } from "../../../models/MuscleGroup";
import { ExerciseExercisingSessionArgs } from "./args/ExerciseExercisingSessionArgs";
import { ExerciseMuscleGroupsArgs } from "./args/ExerciseMuscleGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Exercise)
export class ExerciseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MuscleGroup], {
    nullable: false
  })
  async muscleGroups(@TypeGraphQL.Root() exercise: Exercise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ExerciseMuscleGroupsArgs): Promise<MuscleGroup[]> {
    return getPrismaFromContext(ctx).exercise.findUnique({
      where: {
        id: exercise.id,
      },
    }).muscleGroups(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ExercisingSession], {
    nullable: false
  })
  async ExercisingSession(@TypeGraphQL.Root() exercise: Exercise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ExerciseExercisingSessionArgs): Promise<ExercisingSession[]> {
    return getPrismaFromContext(ctx).exercise.findUnique({
      where: {
        id: exercise.id,
      },
    }).ExercisingSession(args);
  }
}
