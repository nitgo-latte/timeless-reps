import * as TypeGraphQL from "type-graphql";
import { BreathingChain } from "../../../models/BreathingChain";
import { Exercise } from "../../../models/Exercise";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { TimeBox } from "../../../models/TimeBox";
import { ExercisingSessionTimeBoxArgs } from "./args/ExercisingSessionTimeBoxArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingSession)
export class ExercisingSessionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Exercise, {
    nullable: true
  })
  async exercise(@TypeGraphQL.Root() exercisingSession: ExercisingSession, @TypeGraphQL.Ctx() ctx: any): Promise<Exercise | null> {
    return getPrismaFromContext(ctx).exercisingSession.findUnique({
      where: {
        id: exercisingSession.id,
      },
    }).exercise({});
  }

  @TypeGraphQL.FieldResolver(_type => [TimeBox], {
    nullable: false
  })
  async TimeBox(@TypeGraphQL.Root() exercisingSession: ExercisingSession, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ExercisingSessionTimeBoxArgs): Promise<TimeBox[]> {
    return getPrismaFromContext(ctx).exercisingSession.findUnique({
      where: {
        id: exercisingSession.id,
      },
    }).TimeBox(args);
  }

  @TypeGraphQL.FieldResolver(_type => BreathingChain, {
    nullable: true
  })
  async BreathingChain(@TypeGraphQL.Root() exercisingSession: ExercisingSession, @TypeGraphQL.Ctx() ctx: any): Promise<BreathingChain | null> {
    return getPrismaFromContext(ctx).exercisingSession.findUnique({
      where: {
        id: exercisingSession.id,
      },
    }).BreathingChain({});
  }
}
