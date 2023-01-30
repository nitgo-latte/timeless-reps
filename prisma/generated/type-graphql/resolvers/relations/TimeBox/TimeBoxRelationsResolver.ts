import * as TypeGraphQL from "type-graphql";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { ExercisingSession } from "../../../models/ExercisingSession";
import { TimeBox } from "../../../models/TimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TimeBox)
export class TimeBoxRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ExercisingInterval, {
    nullable: true
  })
  async interval(@TypeGraphQL.Root() timeBox: TimeBox, @TypeGraphQL.Ctx() ctx: any): Promise<ExercisingInterval | null> {
    return getPrismaFromContext(ctx).timeBox.findUnique({
      where: {
        id: timeBox.id,
      },
    }).interval({});
  }

  @TypeGraphQL.FieldResolver(_type => ExercisingSession, {
    nullable: false
  })
  async session(@TypeGraphQL.Root() timeBox: TimeBox, @TypeGraphQL.Ctx() ctx: any): Promise<ExercisingSession> {
    return getPrismaFromContext(ctx).timeBox.findUnique({
      where: {
        id: timeBox.id,
      },
    }).session({});
  }
}
