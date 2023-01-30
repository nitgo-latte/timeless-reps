import * as TypeGraphQL from "type-graphql";
import { ExercisingInterval } from "../../../models/ExercisingInterval";
import { TimeBox } from "../../../models/TimeBox";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExercisingInterval)
export class ExercisingIntervalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TimeBox, {
    nullable: false
  })
  async TimeBox(@TypeGraphQL.Root() exercisingInterval: ExercisingInterval, @TypeGraphQL.Ctx() ctx: any): Promise<TimeBox> {
    return getPrismaFromContext(ctx).exercisingInterval.findUnique({
      where: {
        timeBoxId: exercisingInterval.timeBoxId,
      },
    }).TimeBox({});
  }
}
