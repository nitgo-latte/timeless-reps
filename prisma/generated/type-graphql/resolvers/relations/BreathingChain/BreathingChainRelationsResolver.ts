import * as TypeGraphQL from "type-graphql";
import { BreathingChain } from "../../../models/BreathingChain";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { BreathingChainExercisingSessionsArgs } from "./args/BreathingChainExercisingSessionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BreathingChain)
export class BreathingChainRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ExercisingSession], {
    nullable: false
  })
  async exercisingSessions(@TypeGraphQL.Root() breathingChain: BreathingChain, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BreathingChainExercisingSessionsArgs): Promise<ExercisingSession[]> {
    return getPrismaFromContext(ctx).breathingChain.findUnique({
      where: {
        id: breathingChain.id,
      },
    }).exercisingSessions(args);
  }
}
