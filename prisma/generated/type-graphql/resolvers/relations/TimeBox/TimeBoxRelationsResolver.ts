import * as TypeGraphQL from "type-graphql";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { TimeBox } from "../../../models/TimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class TimeBoxRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ExercisingSession, {
    nullable: true
  })
  async exercisingSession(@TypeGraphQL.Root() timeBox: TimeBox, @TypeGraphQL.Ctx() ctx: any): Promise<ExercisingSession | null> {
    return getPrismaFromContext(ctx).timeBox.findUnique({
      where: {
        id: timeBox.id,
      },
    }).exercisingSession({});
  }
}
