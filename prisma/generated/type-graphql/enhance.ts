import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  MuscleGroup: crudResolvers.MuscleGroupCrudResolver,
  Exercise: crudResolvers.ExerciseCrudResolver,
  BreathingChain: crudResolvers.BreathingChainCrudResolver,
  ExercisingSession: crudResolvers.ExercisingSessionCrudResolver,
  TimeBox: crudResolvers.TimeBoxCrudResolver,
  ExercisingInterval: crudResolvers.ExercisingIntervalCrudResolver
};
const actionResolversMap = {
  MuscleGroup: {
    aggregateMuscleGroup: actionResolvers.AggregateMuscleGroupResolver,
    createManyMuscleGroup: actionResolvers.CreateManyMuscleGroupResolver,
    createOneMuscleGroup: actionResolvers.CreateOneMuscleGroupResolver,
    deleteManyMuscleGroup: actionResolvers.DeleteManyMuscleGroupResolver,
    deleteOneMuscleGroup: actionResolvers.DeleteOneMuscleGroupResolver,
    findFirstMuscleGroup: actionResolvers.FindFirstMuscleGroupResolver,
    findFirstMuscleGroupOrThrow: actionResolvers.FindFirstMuscleGroupOrThrowResolver,
    muscleGroups: actionResolvers.FindManyMuscleGroupResolver,
    muscleGroup: actionResolvers.FindUniqueMuscleGroupResolver,
    getMuscleGroup: actionResolvers.FindUniqueMuscleGroupOrThrowResolver,
    groupByMuscleGroup: actionResolvers.GroupByMuscleGroupResolver,
    updateManyMuscleGroup: actionResolvers.UpdateManyMuscleGroupResolver,
    updateOneMuscleGroup: actionResolvers.UpdateOneMuscleGroupResolver,
    upsertOneMuscleGroup: actionResolvers.UpsertOneMuscleGroupResolver
  },
  Exercise: {
    aggregateExercise: actionResolvers.AggregateExerciseResolver,
    createManyExercise: actionResolvers.CreateManyExerciseResolver,
    createOneExercise: actionResolvers.CreateOneExerciseResolver,
    deleteManyExercise: actionResolvers.DeleteManyExerciseResolver,
    deleteOneExercise: actionResolvers.DeleteOneExerciseResolver,
    findFirstExercise: actionResolvers.FindFirstExerciseResolver,
    findFirstExerciseOrThrow: actionResolvers.FindFirstExerciseOrThrowResolver,
    exercises: actionResolvers.FindManyExerciseResolver,
    exercise: actionResolvers.FindUniqueExerciseResolver,
    getExercise: actionResolvers.FindUniqueExerciseOrThrowResolver,
    groupByExercise: actionResolvers.GroupByExerciseResolver,
    updateManyExercise: actionResolvers.UpdateManyExerciseResolver,
    updateOneExercise: actionResolvers.UpdateOneExerciseResolver,
    upsertOneExercise: actionResolvers.UpsertOneExerciseResolver
  },
  BreathingChain: {
    aggregateBreathingChain: actionResolvers.AggregateBreathingChainResolver,
    createManyBreathingChain: actionResolvers.CreateManyBreathingChainResolver,
    createOneBreathingChain: actionResolvers.CreateOneBreathingChainResolver,
    deleteManyBreathingChain: actionResolvers.DeleteManyBreathingChainResolver,
    deleteOneBreathingChain: actionResolvers.DeleteOneBreathingChainResolver,
    findFirstBreathingChain: actionResolvers.FindFirstBreathingChainResolver,
    findFirstBreathingChainOrThrow: actionResolvers.FindFirstBreathingChainOrThrowResolver,
    breathingChains: actionResolvers.FindManyBreathingChainResolver,
    breathingChain: actionResolvers.FindUniqueBreathingChainResolver,
    getBreathingChain: actionResolvers.FindUniqueBreathingChainOrThrowResolver,
    groupByBreathingChain: actionResolvers.GroupByBreathingChainResolver,
    updateManyBreathingChain: actionResolvers.UpdateManyBreathingChainResolver,
    updateOneBreathingChain: actionResolvers.UpdateOneBreathingChainResolver,
    upsertOneBreathingChain: actionResolvers.UpsertOneBreathingChainResolver
  },
  ExercisingSession: {
    aggregateExercisingSession: actionResolvers.AggregateExercisingSessionResolver,
    createManyExercisingSession: actionResolvers.CreateManyExercisingSessionResolver,
    createOneExercisingSession: actionResolvers.CreateOneExercisingSessionResolver,
    deleteManyExercisingSession: actionResolvers.DeleteManyExercisingSessionResolver,
    deleteOneExercisingSession: actionResolvers.DeleteOneExercisingSessionResolver,
    findFirstExercisingSession: actionResolvers.FindFirstExercisingSessionResolver,
    findFirstExercisingSessionOrThrow: actionResolvers.FindFirstExercisingSessionOrThrowResolver,
    exercisingSessions: actionResolvers.FindManyExercisingSessionResolver,
    exercisingSession: actionResolvers.FindUniqueExercisingSessionResolver,
    getExercisingSession: actionResolvers.FindUniqueExercisingSessionOrThrowResolver,
    groupByExercisingSession: actionResolvers.GroupByExercisingSessionResolver,
    updateManyExercisingSession: actionResolvers.UpdateManyExercisingSessionResolver,
    updateOneExercisingSession: actionResolvers.UpdateOneExercisingSessionResolver,
    upsertOneExercisingSession: actionResolvers.UpsertOneExercisingSessionResolver
  },
  TimeBox: {
    aggregateTimeBox: actionResolvers.AggregateTimeBoxResolver,
    createManyTimeBox: actionResolvers.CreateManyTimeBoxResolver,
    createOneTimeBox: actionResolvers.CreateOneTimeBoxResolver,
    deleteManyTimeBox: actionResolvers.DeleteManyTimeBoxResolver,
    deleteOneTimeBox: actionResolvers.DeleteOneTimeBoxResolver,
    findFirstTimeBox: actionResolvers.FindFirstTimeBoxResolver,
    findFirstTimeBoxOrThrow: actionResolvers.FindFirstTimeBoxOrThrowResolver,
    timeBoxes: actionResolvers.FindManyTimeBoxResolver,
    timeBox: actionResolvers.FindUniqueTimeBoxResolver,
    getTimeBox: actionResolvers.FindUniqueTimeBoxOrThrowResolver,
    groupByTimeBox: actionResolvers.GroupByTimeBoxResolver,
    updateManyTimeBox: actionResolvers.UpdateManyTimeBoxResolver,
    updateOneTimeBox: actionResolvers.UpdateOneTimeBoxResolver,
    upsertOneTimeBox: actionResolvers.UpsertOneTimeBoxResolver
  },
  ExercisingInterval: {
    aggregateExercisingInterval: actionResolvers.AggregateExercisingIntervalResolver,
    createManyExercisingInterval: actionResolvers.CreateManyExercisingIntervalResolver,
    createOneExercisingInterval: actionResolvers.CreateOneExercisingIntervalResolver,
    deleteManyExercisingInterval: actionResolvers.DeleteManyExercisingIntervalResolver,
    deleteOneExercisingInterval: actionResolvers.DeleteOneExercisingIntervalResolver,
    findFirstExercisingInterval: actionResolvers.FindFirstExercisingIntervalResolver,
    findFirstExercisingIntervalOrThrow: actionResolvers.FindFirstExercisingIntervalOrThrowResolver,
    exercisingIntervals: actionResolvers.FindManyExercisingIntervalResolver,
    exercisingInterval: actionResolvers.FindUniqueExercisingIntervalResolver,
    getExercisingInterval: actionResolvers.FindUniqueExercisingIntervalOrThrowResolver,
    groupByExercisingInterval: actionResolvers.GroupByExercisingIntervalResolver,
    updateManyExercisingInterval: actionResolvers.UpdateManyExercisingIntervalResolver,
    updateOneExercisingInterval: actionResolvers.UpdateOneExercisingIntervalResolver,
    upsertOneExercisingInterval: actionResolvers.UpsertOneExercisingIntervalResolver
  }
};
const crudResolversInfo = {
  MuscleGroup: ["aggregateMuscleGroup", "createManyMuscleGroup", "createOneMuscleGroup", "deleteManyMuscleGroup", "deleteOneMuscleGroup", "findFirstMuscleGroup", "findFirstMuscleGroupOrThrow", "muscleGroups", "muscleGroup", "getMuscleGroup", "groupByMuscleGroup", "updateManyMuscleGroup", "updateOneMuscleGroup", "upsertOneMuscleGroup"],
  Exercise: ["aggregateExercise", "createManyExercise", "createOneExercise", "deleteManyExercise", "deleteOneExercise", "findFirstExercise", "findFirstExerciseOrThrow", "exercises", "exercise", "getExercise", "groupByExercise", "updateManyExercise", "updateOneExercise", "upsertOneExercise"],
  BreathingChain: ["aggregateBreathingChain", "createManyBreathingChain", "createOneBreathingChain", "deleteManyBreathingChain", "deleteOneBreathingChain", "findFirstBreathingChain", "findFirstBreathingChainOrThrow", "breathingChains", "breathingChain", "getBreathingChain", "groupByBreathingChain", "updateManyBreathingChain", "updateOneBreathingChain", "upsertOneBreathingChain"],
  ExercisingSession: ["aggregateExercisingSession", "createManyExercisingSession", "createOneExercisingSession", "deleteManyExercisingSession", "deleteOneExercisingSession", "findFirstExercisingSession", "findFirstExercisingSessionOrThrow", "exercisingSessions", "exercisingSession", "getExercisingSession", "groupByExercisingSession", "updateManyExercisingSession", "updateOneExercisingSession", "upsertOneExercisingSession"],
  TimeBox: ["aggregateTimeBox", "createManyTimeBox", "createOneTimeBox", "deleteManyTimeBox", "deleteOneTimeBox", "findFirstTimeBox", "findFirstTimeBoxOrThrow", "timeBoxes", "timeBox", "getTimeBox", "groupByTimeBox", "updateManyTimeBox", "updateOneTimeBox", "upsertOneTimeBox"],
  ExercisingInterval: ["aggregateExercisingInterval", "createManyExercisingInterval", "createOneExercisingInterval", "deleteManyExercisingInterval", "deleteOneExercisingInterval", "findFirstExercisingInterval", "findFirstExercisingIntervalOrThrow", "exercisingIntervals", "exercisingInterval", "getExercisingInterval", "groupByExercisingInterval", "updateManyExercisingInterval", "updateOneExercisingInterval", "upsertOneExercisingInterval"]
};
const argsInfo = {
  AggregateMuscleGroupArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMuscleGroupArgs: ["data", "skipDuplicates"],
  CreateOneMuscleGroupArgs: ["data"],
  DeleteManyMuscleGroupArgs: ["where"],
  DeleteOneMuscleGroupArgs: ["where"],
  FindFirstMuscleGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMuscleGroupOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMuscleGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMuscleGroupArgs: ["where"],
  FindUniqueMuscleGroupOrThrowArgs: ["where"],
  GroupByMuscleGroupArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMuscleGroupArgs: ["data", "where"],
  UpdateOneMuscleGroupArgs: ["data", "where"],
  UpsertOneMuscleGroupArgs: ["where", "create", "update"],
  AggregateExerciseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExerciseArgs: ["data", "skipDuplicates"],
  CreateOneExerciseArgs: ["data"],
  DeleteManyExerciseArgs: ["where"],
  DeleteOneExerciseArgs: ["where"],
  FindFirstExerciseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExerciseOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExerciseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExerciseArgs: ["where"],
  FindUniqueExerciseOrThrowArgs: ["where"],
  GroupByExerciseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExerciseArgs: ["data", "where"],
  UpdateOneExerciseArgs: ["data", "where"],
  UpsertOneExerciseArgs: ["where", "create", "update"],
  AggregateBreathingChainArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBreathingChainArgs: ["data", "skipDuplicates"],
  CreateOneBreathingChainArgs: ["data"],
  DeleteManyBreathingChainArgs: ["where"],
  DeleteOneBreathingChainArgs: ["where"],
  FindFirstBreathingChainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstBreathingChainOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBreathingChainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBreathingChainArgs: ["where"],
  FindUniqueBreathingChainOrThrowArgs: ["where"],
  GroupByBreathingChainArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBreathingChainArgs: ["data", "where"],
  UpdateOneBreathingChainArgs: ["data", "where"],
  UpsertOneBreathingChainArgs: ["where", "create", "update"],
  AggregateExercisingSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExercisingSessionArgs: ["data", "skipDuplicates"],
  CreateOneExercisingSessionArgs: ["data"],
  DeleteManyExercisingSessionArgs: ["where"],
  DeleteOneExercisingSessionArgs: ["where"],
  FindFirstExercisingSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExercisingSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExercisingSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExercisingSessionArgs: ["where"],
  FindUniqueExercisingSessionOrThrowArgs: ["where"],
  GroupByExercisingSessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExercisingSessionArgs: ["data", "where"],
  UpdateOneExercisingSessionArgs: ["data", "where"],
  UpsertOneExercisingSessionArgs: ["where", "create", "update"],
  AggregateTimeBoxArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTimeBoxArgs: ["data", "skipDuplicates"],
  CreateOneTimeBoxArgs: ["data"],
  DeleteManyTimeBoxArgs: ["where"],
  DeleteOneTimeBoxArgs: ["where"],
  FindFirstTimeBoxArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTimeBoxOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTimeBoxArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTimeBoxArgs: ["where"],
  FindUniqueTimeBoxOrThrowArgs: ["where"],
  GroupByTimeBoxArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTimeBoxArgs: ["data", "where"],
  UpdateOneTimeBoxArgs: ["data", "where"],
  UpsertOneTimeBoxArgs: ["where", "create", "update"],
  AggregateExercisingIntervalArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExercisingIntervalArgs: ["data", "skipDuplicates"],
  CreateOneExercisingIntervalArgs: ["data"],
  DeleteManyExercisingIntervalArgs: ["where"],
  DeleteOneExercisingIntervalArgs: ["where"],
  FindFirstExercisingIntervalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExercisingIntervalOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExercisingIntervalArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExercisingIntervalArgs: ["where"],
  FindUniqueExercisingIntervalOrThrowArgs: ["where"],
  GroupByExercisingIntervalArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExercisingIntervalArgs: ["data", "where"],
  UpdateOneExercisingIntervalArgs: ["data", "where"],
  UpsertOneExercisingIntervalArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  MuscleGroup: relationResolvers.MuscleGroupRelationsResolver,
  Exercise: relationResolvers.ExerciseRelationsResolver,
  BreathingChain: relationResolvers.BreathingChainRelationsResolver,
  ExercisingSession: relationResolvers.ExercisingSessionRelationsResolver,
  TimeBox: relationResolvers.TimeBoxRelationsResolver,
  ExercisingInterval: relationResolvers.ExercisingIntervalRelationsResolver
};
const relationResolversInfo = {
  MuscleGroup: ["exercises"],
  Exercise: ["muscleGroups", "ExercisingSession"],
  BreathingChain: ["exercisingSessions"],
  ExercisingSession: ["exercise", "TimeBox", "BreathingChain"],
  TimeBox: ["interval", "session"],
  ExercisingInterval: ["TimeBox"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  MuscleGroup: ["id", "name"],
  Exercise: ["id", "name", "difficulty"],
  BreathingChain: ["id", "createdAt", "updatedAt"],
  ExercisingSession: ["id", "exerciseId", "breathingChainId"],
  TimeBox: ["id", "createdAt", "updatedAt", "exercisingSessionId"],
  ExercisingInterval: ["createdAt", "closedAt", "timeBoxId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateMuscleGroup: ["_count", "_avg", "_sum", "_min", "_max"],
  MuscleGroupGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateExercise: ["_count", "_avg", "_sum", "_min", "_max"],
  ExerciseGroupBy: ["id", "name", "difficulty", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBreathingChain: ["_count", "_min", "_max"],
  BreathingChainGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateExercisingSession: ["_count", "_avg", "_sum", "_min", "_max"],
  ExercisingSessionGroupBy: ["id", "exerciseId", "breathingChainId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTimeBox: ["_count", "_avg", "_sum", "_min", "_max"],
  TimeBoxGroupBy: ["id", "createdAt", "updatedAt", "exercisingSessionId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateExercisingInterval: ["_count", "_min", "_max"],
  ExercisingIntervalGroupBy: ["createdAt", "closedAt", "timeBoxId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  MuscleGroupCount: ["exercises"],
  MuscleGroupCountAggregate: ["id", "name", "_all"],
  MuscleGroupAvgAggregate: ["id"],
  MuscleGroupSumAggregate: ["id"],
  MuscleGroupMinAggregate: ["id", "name"],
  MuscleGroupMaxAggregate: ["id", "name"],
  ExerciseCount: ["muscleGroups", "ExercisingSession"],
  ExerciseCountAggregate: ["id", "name", "difficulty", "_all"],
  ExerciseAvgAggregate: ["id"],
  ExerciseSumAggregate: ["id"],
  ExerciseMinAggregate: ["id", "name", "difficulty"],
  ExerciseMaxAggregate: ["id", "name", "difficulty"],
  BreathingChainCount: ["exercisingSessions"],
  BreathingChainCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  BreathingChainMinAggregate: ["id", "createdAt", "updatedAt"],
  BreathingChainMaxAggregate: ["id", "createdAt", "updatedAt"],
  ExercisingSessionCount: ["TimeBox"],
  ExercisingSessionCountAggregate: ["id", "exerciseId", "breathingChainId", "_all"],
  ExercisingSessionAvgAggregate: ["id", "exerciseId"],
  ExercisingSessionSumAggregate: ["id", "exerciseId"],
  ExercisingSessionMinAggregate: ["id", "exerciseId", "breathingChainId"],
  ExercisingSessionMaxAggregate: ["id", "exerciseId", "breathingChainId"],
  TimeBoxCountAggregate: ["id", "createdAt", "updatedAt", "exercisingSessionId", "_all"],
  TimeBoxAvgAggregate: ["exercisingSessionId"],
  TimeBoxSumAggregate: ["exercisingSessionId"],
  TimeBoxMinAggregate: ["id", "createdAt", "updatedAt", "exercisingSessionId"],
  TimeBoxMaxAggregate: ["id", "createdAt", "updatedAt", "exercisingSessionId"],
  ExercisingIntervalCountAggregate: ["createdAt", "closedAt", "timeBoxId", "_all"],
  ExercisingIntervalMinAggregate: ["createdAt", "closedAt", "timeBoxId"],
  ExercisingIntervalMaxAggregate: ["createdAt", "closedAt", "timeBoxId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  MuscleGroupWhereInput: ["AND", "OR", "NOT", "id", "name", "exercises"],
  MuscleGroupOrderByWithRelationInput: ["id", "name", "exercises"],
  MuscleGroupWhereUniqueInput: ["id", "name"],
  MuscleGroupOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  MuscleGroupScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  ExerciseWhereInput: ["AND", "OR", "NOT", "id", "name", "muscleGroups", "difficulty", "ExercisingSession"],
  ExerciseOrderByWithRelationInput: ["id", "name", "muscleGroups", "difficulty", "ExercisingSession"],
  ExerciseWhereUniqueInput: ["id", "name"],
  ExerciseOrderByWithAggregationInput: ["id", "name", "difficulty", "_count", "_avg", "_max", "_min", "_sum"],
  ExerciseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "difficulty"],
  BreathingChainWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "exercisingSessions"],
  BreathingChainOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "exercisingSessions"],
  BreathingChainWhereUniqueInput: ["id"],
  BreathingChainOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "_count", "_max", "_min"],
  BreathingChainScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  ExercisingSessionWhereInput: ["AND", "OR", "NOT", "id", "exercise", "exerciseId", "TimeBox", "BreathingChain", "breathingChainId"],
  ExercisingSessionOrderByWithRelationInput: ["id", "exercise", "exerciseId", "TimeBox", "BreathingChain", "breathingChainId"],
  ExercisingSessionWhereUniqueInput: ["id", "breathingChainId"],
  ExercisingSessionOrderByWithAggregationInput: ["id", "exerciseId", "breathingChainId", "_count", "_avg", "_max", "_min", "_sum"],
  ExercisingSessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "exerciseId", "breathingChainId"],
  TimeBoxWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "interval", "session", "exercisingSessionId"],
  TimeBoxOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "interval", "session", "exercisingSessionId"],
  TimeBoxWhereUniqueInput: ["id"],
  TimeBoxOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "exercisingSessionId", "_count", "_avg", "_max", "_min", "_sum"],
  TimeBoxScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "exercisingSessionId"],
  ExercisingIntervalWhereInput: ["AND", "OR", "NOT", "createdAt", "closedAt", "TimeBox", "timeBoxId"],
  ExercisingIntervalOrderByWithRelationInput: ["createdAt", "closedAt", "TimeBox", "timeBoxId"],
  ExercisingIntervalWhereUniqueInput: ["timeBoxId", "createdAt_closedAt"],
  ExercisingIntervalOrderByWithAggregationInput: ["createdAt", "closedAt", "timeBoxId", "_count", "_max", "_min"],
  ExercisingIntervalScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "createdAt", "closedAt", "timeBoxId"],
  MuscleGroupCreateInput: ["name", "exercises"],
  MuscleGroupUpdateInput: ["name", "exercises"],
  MuscleGroupCreateManyInput: ["id", "name"],
  MuscleGroupUpdateManyMutationInput: ["name"],
  ExerciseCreateInput: ["name", "muscleGroups", "difficulty", "ExercisingSession"],
  ExerciseUpdateInput: ["name", "muscleGroups", "difficulty", "ExercisingSession"],
  ExerciseCreateManyInput: ["id", "name", "difficulty"],
  ExerciseUpdateManyMutationInput: ["name", "difficulty"],
  BreathingChainCreateInput: ["id", "createdAt", "updatedAt", "exercisingSessions"],
  BreathingChainUpdateInput: ["id", "createdAt", "updatedAt", "exercisingSessions"],
  BreathingChainCreateManyInput: ["id", "createdAt", "updatedAt"],
  BreathingChainUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  ExercisingSessionCreateInput: ["exercise", "TimeBox", "BreathingChain"],
  ExercisingSessionUpdateInput: ["exercise", "TimeBox", "BreathingChain"],
  ExercisingSessionCreateManyInput: ["id", "exerciseId", "breathingChainId"],
  ExercisingSessionUpdateManyMutationInput: [],
  TimeBoxCreateInput: ["id", "createdAt", "updatedAt", "interval", "session"],
  TimeBoxUpdateInput: ["id", "createdAt", "updatedAt", "interval", "session"],
  TimeBoxCreateManyInput: ["id", "createdAt", "updatedAt", "exercisingSessionId"],
  TimeBoxUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  ExercisingIntervalCreateInput: ["createdAt", "closedAt", "TimeBox"],
  ExercisingIntervalUpdateInput: ["createdAt", "closedAt", "TimeBox"],
  ExercisingIntervalCreateManyInput: ["createdAt", "closedAt", "timeBoxId"],
  ExercisingIntervalUpdateManyMutationInput: ["createdAt", "closedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ExerciseListRelationFilter: ["every", "some", "none"],
  ExerciseOrderByRelationAggregateInput: ["_count"],
  MuscleGroupCountOrderByAggregateInput: ["id", "name"],
  MuscleGroupAvgOrderByAggregateInput: ["id"],
  MuscleGroupMaxOrderByAggregateInput: ["id", "name"],
  MuscleGroupMinOrderByAggregateInput: ["id", "name"],
  MuscleGroupSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  MuscleGroupListRelationFilter: ["every", "some", "none"],
  EnumDifficultyFilter: ["equals", "in", "notIn", "not"],
  ExercisingSessionListRelationFilter: ["every", "some", "none"],
  MuscleGroupOrderByRelationAggregateInput: ["_count"],
  ExercisingSessionOrderByRelationAggregateInput: ["_count"],
  ExerciseCountOrderByAggregateInput: ["id", "name", "difficulty"],
  ExerciseAvgOrderByAggregateInput: ["id"],
  ExerciseMaxOrderByAggregateInput: ["id", "name", "difficulty"],
  ExerciseMinOrderByAggregateInput: ["id", "name", "difficulty"],
  ExerciseSumOrderByAggregateInput: ["id"],
  EnumDifficultyWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BreathingChainCountOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  BreathingChainMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  BreathingChainMinOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ExerciseRelationFilter: ["is", "isNot"],
  TimeBoxListRelationFilter: ["every", "some", "none"],
  BreathingChainRelationFilter: ["is", "isNot"],
  TimeBoxOrderByRelationAggregateInput: ["_count"],
  ExercisingSessionCountOrderByAggregateInput: ["id", "exerciseId", "breathingChainId"],
  ExercisingSessionAvgOrderByAggregateInput: ["id", "exerciseId"],
  ExercisingSessionMaxOrderByAggregateInput: ["id", "exerciseId", "breathingChainId"],
  ExercisingSessionMinOrderByAggregateInput: ["id", "exerciseId", "breathingChainId"],
  ExercisingSessionSumOrderByAggregateInput: ["id", "exerciseId"],
  ExercisingIntervalRelationFilter: ["is", "isNot"],
  ExercisingSessionRelationFilter: ["is", "isNot"],
  TimeBoxCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "exercisingSessionId"],
  TimeBoxAvgOrderByAggregateInput: ["exercisingSessionId"],
  TimeBoxMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "exercisingSessionId"],
  TimeBoxMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "exercisingSessionId"],
  TimeBoxSumOrderByAggregateInput: ["exercisingSessionId"],
  TimeBoxRelationFilter: ["is", "isNot"],
  ExercisingIntervalCreatedAtClosedAtCompoundUniqueInput: ["createdAt", "closedAt"],
  ExercisingIntervalCountOrderByAggregateInput: ["createdAt", "closedAt", "timeBoxId"],
  ExercisingIntervalMaxOrderByAggregateInput: ["createdAt", "closedAt", "timeBoxId"],
  ExercisingIntervalMinOrderByAggregateInput: ["createdAt", "closedAt", "timeBoxId"],
  ExerciseCreateNestedManyWithoutMuscleGroupsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  ExerciseUpdateManyWithoutMuscleGroupsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  MuscleGroupCreateNestedManyWithoutExercisesInput: ["create", "connectOrCreate", "connect"],
  ExercisingSessionCreateNestedManyWithoutExerciseInput: ["create", "connectOrCreate", "createMany", "connect"],
  MuscleGroupUpdateManyWithoutExercisesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EnumDifficultyFieldUpdateOperationsInput: ["set"],
  ExercisingSessionUpdateManyWithoutExerciseNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExercisingSessionCreateNestedManyWithoutBreathingChainInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  ExercisingSessionUpdateManyWithoutBreathingChainNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExerciseCreateNestedOneWithoutExercisingSessionInput: ["create", "connectOrCreate", "connect"],
  TimeBoxCreateNestedManyWithoutSessionInput: ["create", "connectOrCreate", "createMany", "connect"],
  BreathingChainCreateNestedOneWithoutExercisingSessionsInput: ["create", "connectOrCreate", "connect"],
  ExerciseUpdateOneRequiredWithoutExercisingSessionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TimeBoxUpdateManyWithoutSessionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BreathingChainUpdateOneRequiredWithoutExercisingSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ExercisingIntervalCreateNestedOneWithoutTimeBoxInput: ["create", "connectOrCreate", "connect"],
  ExercisingSessionCreateNestedOneWithoutTimeBoxInput: ["create", "connectOrCreate", "connect"],
  ExercisingIntervalUpdateOneWithoutTimeBoxNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ExercisingSessionUpdateOneRequiredWithoutTimeBoxNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TimeBoxCreateNestedOneWithoutIntervalInput: ["create", "connectOrCreate", "connect"],
  TimeBoxUpdateOneRequiredWithoutIntervalNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumDifficultyFilter: ["equals", "in", "notIn", "not"],
  NestedEnumDifficultyWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ExerciseCreateWithoutMuscleGroupsInput: ["name", "difficulty", "ExercisingSession"],
  ExerciseCreateOrConnectWithoutMuscleGroupsInput: ["where", "create"],
  ExerciseUpsertWithWhereUniqueWithoutMuscleGroupsInput: ["where", "update", "create"],
  ExerciseUpdateWithWhereUniqueWithoutMuscleGroupsInput: ["where", "data"],
  ExerciseUpdateManyWithWhereWithoutMuscleGroupsInput: ["where", "data"],
  ExerciseScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "difficulty"],
  MuscleGroupCreateWithoutExercisesInput: ["name"],
  MuscleGroupCreateOrConnectWithoutExercisesInput: ["where", "create"],
  ExercisingSessionCreateWithoutExerciseInput: ["TimeBox", "BreathingChain"],
  ExercisingSessionCreateOrConnectWithoutExerciseInput: ["where", "create"],
  ExercisingSessionCreateManyExerciseInputEnvelope: ["data", "skipDuplicates"],
  MuscleGroupUpsertWithWhereUniqueWithoutExercisesInput: ["where", "update", "create"],
  MuscleGroupUpdateWithWhereUniqueWithoutExercisesInput: ["where", "data"],
  MuscleGroupUpdateManyWithWhereWithoutExercisesInput: ["where", "data"],
  MuscleGroupScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  ExercisingSessionUpsertWithWhereUniqueWithoutExerciseInput: ["where", "update", "create"],
  ExercisingSessionUpdateWithWhereUniqueWithoutExerciseInput: ["where", "data"],
  ExercisingSessionUpdateManyWithWhereWithoutExerciseInput: ["where", "data"],
  ExercisingSessionScalarWhereInput: ["AND", "OR", "NOT", "id", "exerciseId", "breathingChainId"],
  ExercisingSessionCreateWithoutBreathingChainInput: ["exercise", "TimeBox"],
  ExercisingSessionCreateOrConnectWithoutBreathingChainInput: ["where", "create"],
  ExercisingSessionCreateManyBreathingChainInputEnvelope: ["data", "skipDuplicates"],
  ExercisingSessionUpsertWithWhereUniqueWithoutBreathingChainInput: ["where", "update", "create"],
  ExercisingSessionUpdateWithWhereUniqueWithoutBreathingChainInput: ["where", "data"],
  ExercisingSessionUpdateManyWithWhereWithoutBreathingChainInput: ["where", "data"],
  ExerciseCreateWithoutExercisingSessionInput: ["name", "muscleGroups", "difficulty"],
  ExerciseCreateOrConnectWithoutExercisingSessionInput: ["where", "create"],
  TimeBoxCreateWithoutSessionInput: ["id", "createdAt", "updatedAt", "interval"],
  TimeBoxCreateOrConnectWithoutSessionInput: ["where", "create"],
  TimeBoxCreateManySessionInputEnvelope: ["data", "skipDuplicates"],
  BreathingChainCreateWithoutExercisingSessionsInput: ["id", "createdAt", "updatedAt"],
  BreathingChainCreateOrConnectWithoutExercisingSessionsInput: ["where", "create"],
  ExerciseUpsertWithoutExercisingSessionInput: ["update", "create"],
  ExerciseUpdateWithoutExercisingSessionInput: ["name", "muscleGroups", "difficulty"],
  TimeBoxUpsertWithWhereUniqueWithoutSessionInput: ["where", "update", "create"],
  TimeBoxUpdateWithWhereUniqueWithoutSessionInput: ["where", "data"],
  TimeBoxUpdateManyWithWhereWithoutSessionInput: ["where", "data"],
  TimeBoxScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "exercisingSessionId"],
  BreathingChainUpsertWithoutExercisingSessionsInput: ["update", "create"],
  BreathingChainUpdateWithoutExercisingSessionsInput: ["id", "createdAt", "updatedAt"],
  ExercisingIntervalCreateWithoutTimeBoxInput: ["createdAt", "closedAt"],
  ExercisingIntervalCreateOrConnectWithoutTimeBoxInput: ["where", "create"],
  ExercisingSessionCreateWithoutTimeBoxInput: ["exercise", "BreathingChain"],
  ExercisingSessionCreateOrConnectWithoutTimeBoxInput: ["where", "create"],
  ExercisingIntervalUpsertWithoutTimeBoxInput: ["update", "create"],
  ExercisingIntervalUpdateWithoutTimeBoxInput: ["createdAt", "closedAt"],
  ExercisingSessionUpsertWithoutTimeBoxInput: ["update", "create"],
  ExercisingSessionUpdateWithoutTimeBoxInput: ["exercise", "BreathingChain"],
  TimeBoxCreateWithoutIntervalInput: ["id", "createdAt", "updatedAt", "session"],
  TimeBoxCreateOrConnectWithoutIntervalInput: ["where", "create"],
  TimeBoxUpsertWithoutIntervalInput: ["update", "create"],
  TimeBoxUpdateWithoutIntervalInput: ["id", "createdAt", "updatedAt", "session"],
  ExerciseUpdateWithoutMuscleGroupsInput: ["name", "difficulty", "ExercisingSession"],
  ExercisingSessionCreateManyExerciseInput: ["id", "breathingChainId"],
  MuscleGroupUpdateWithoutExercisesInput: ["name"],
  ExercisingSessionUpdateWithoutExerciseInput: ["TimeBox", "BreathingChain"],
  ExercisingSessionCreateManyBreathingChainInput: ["id", "exerciseId"],
  ExercisingSessionUpdateWithoutBreathingChainInput: ["exercise", "TimeBox"],
  TimeBoxCreateManySessionInput: ["id", "createdAt", "updatedAt"],
  TimeBoxUpdateWithoutSessionInput: ["id", "createdAt", "updatedAt", "interval"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

