import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "model_views" */
export type Model_Views = {
  __typename?: 'model_views';
  id?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "model_views" */
export type Model_Views_Aggregate = {
  __typename?: 'model_views_aggregate';
  aggregate?: Maybe<Model_Views_Aggregate_Fields>;
  nodes: Array<Model_Views>;
};

/** aggregate fields of "model_views" */
export type Model_Views_Aggregate_Fields = {
  __typename?: 'model_views_aggregate_fields';
  avg?: Maybe<Model_Views_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Model_Views_Max_Fields>;
  min?: Maybe<Model_Views_Min_Fields>;
  stddev?: Maybe<Model_Views_Stddev_Fields>;
  stddev_pop?: Maybe<Model_Views_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Model_Views_Stddev_Samp_Fields>;
  sum?: Maybe<Model_Views_Sum_Fields>;
  var_pop?: Maybe<Model_Views_Var_Pop_Fields>;
  var_samp?: Maybe<Model_Views_Var_Samp_Fields>;
  variance?: Maybe<Model_Views_Variance_Fields>;
};


/** aggregate fields of "model_views" */
export type Model_Views_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Model_Views_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Model_Views_Avg_Fields = {
  __typename?: 'model_views_avg_fields';
  views?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "model_views". All fields are combined with a logical 'AND'. */
export type Model_Views_Bool_Exp = {
  _and?: Maybe<Array<Model_Views_Bool_Exp>>;
  _not?: Maybe<Model_Views_Bool_Exp>;
  _or?: Maybe<Array<Model_Views_Bool_Exp>>;
  id?: Maybe<String_Comparison_Exp>;
  views?: Maybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "model_views" */
export type Model_Views_Inc_Input = {
  views?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "model_views" */
export type Model_Views_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Model_Views_Max_Fields = {
  __typename?: 'model_views_max_fields';
  id?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Model_Views_Min_Fields = {
  __typename?: 'model_views_min_fields';
  id?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "model_views" */
export type Model_Views_Mutation_Response = {
  __typename?: 'model_views_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Model_Views>;
};

/** Ordering options when selecting data from "model_views". */
export type Model_Views_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** select columns of table "model_views" */
export enum Model_Views_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Views = 'views'
}

/** input type for updating data in table "model_views" */
export type Model_Views_Set_Input = {
  id?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Model_Views_Stddev_Fields = {
  __typename?: 'model_views_stddev_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Model_Views_Stddev_Pop_Fields = {
  __typename?: 'model_views_stddev_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Model_Views_Stddev_Samp_Fields = {
  __typename?: 'model_views_stddev_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Model_Views_Sum_Fields = {
  __typename?: 'model_views_sum_fields';
  views?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Model_Views_Var_Pop_Fields = {
  __typename?: 'model_views_var_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Model_Views_Var_Samp_Fields = {
  __typename?: 'model_views_var_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Model_Views_Variance_Fields = {
  __typename?: 'model_views_variance_fields';
  views?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "models" */
export type Models = {
  __typename?: 'models';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['String'];
  model_url: Scalars['String'];
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_id: Scalars['String'];
  thumbnail_url?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  views: Scalars['Int'];
};

/** aggregated selection of "models" */
export type Models_Aggregate = {
  __typename?: 'models_aggregate';
  aggregate?: Maybe<Models_Aggregate_Fields>;
  nodes: Array<Models>;
};

/** aggregate fields of "models" */
export type Models_Aggregate_Fields = {
  __typename?: 'models_aggregate_fields';
  avg?: Maybe<Models_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Models_Max_Fields>;
  min?: Maybe<Models_Min_Fields>;
  stddev?: Maybe<Models_Stddev_Fields>;
  stddev_pop?: Maybe<Models_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Models_Stddev_Samp_Fields>;
  sum?: Maybe<Models_Sum_Fields>;
  var_pop?: Maybe<Models_Var_Pop_Fields>;
  var_samp?: Maybe<Models_Var_Samp_Fields>;
  variance?: Maybe<Models_Variance_Fields>;
};


/** aggregate fields of "models" */
export type Models_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Models_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "models" */
export type Models_Aggregate_Order_By = {
  avg?: Maybe<Models_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Models_Max_Order_By>;
  min?: Maybe<Models_Min_Order_By>;
  stddev?: Maybe<Models_Stddev_Order_By>;
  stddev_pop?: Maybe<Models_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Models_Stddev_Samp_Order_By>;
  sum?: Maybe<Models_Sum_Order_By>;
  var_pop?: Maybe<Models_Var_Pop_Order_By>;
  var_samp?: Maybe<Models_Var_Samp_Order_By>;
  variance?: Maybe<Models_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "models" */
export type Models_Arr_Rel_Insert_Input = {
  data: Array<Models_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Models_On_Conflict>;
};

/** aggregate avg on columns */
export type Models_Avg_Fields = {
  __typename?: 'models_avg_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "models" */
export type Models_Avg_Order_By = {
  views?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "models". All fields are combined with a logical 'AND'. */
export type Models_Bool_Exp = {
  _and?: Maybe<Array<Models_Bool_Exp>>;
  _not?: Maybe<Models_Bool_Exp>;
  _or?: Maybe<Array<Models_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  model_url?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<String_Comparison_Exp>;
  thumbnail_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  views?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "models" */
export enum Models_Constraint {
  /** unique or primary key constraint */
  ModelsPkey = 'models_pkey'
}

/** input type for incrementing numeric columns in table "models" */
export type Models_Inc_Input = {
  views?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "models" */
export type Models_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  model_url?: Maybe<Scalars['String']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Models_Max_Fields = {
  __typename?: 'models_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  model_url?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  views?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "models" */
export type Models_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_url?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Models_Min_Fields = {
  __typename?: 'models_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  model_url?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  views?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "models" */
export type Models_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_url?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** response of any mutation on the table "models" */
export type Models_Mutation_Response = {
  __typename?: 'models_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Models>;
};

/** on conflict condition type for table "models" */
export type Models_On_Conflict = {
  constraint: Models_Constraint;
  update_columns?: Array<Models_Update_Column>;
  where?: Maybe<Models_Bool_Exp>;
};

/** Ordering options when selecting data from "models". */
export type Models_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_url?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** primary key columns input for table: models */
export type Models_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "models" */
export enum Models_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ModelUrl = 'model_url',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Views = 'views'
}

/** input type for updating data in table "models" */
export type Models_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  model_url?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Models_Stddev_Fields = {
  __typename?: 'models_stddev_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "models" */
export type Models_Stddev_Order_By = {
  views?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Models_Stddev_Pop_Fields = {
  __typename?: 'models_stddev_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "models" */
export type Models_Stddev_Pop_Order_By = {
  views?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Models_Stddev_Samp_Fields = {
  __typename?: 'models_stddev_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "models" */
export type Models_Stddev_Samp_Order_By = {
  views?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Models_Sum_Fields = {
  __typename?: 'models_sum_fields';
  views?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "models" */
export type Models_Sum_Order_By = {
  views?: Maybe<Order_By>;
};

/** update columns of table "models" */
export enum Models_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ModelUrl = 'model_url',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Views = 'views'
}

/** aggregate var_pop on columns */
export type Models_Var_Pop_Fields = {
  __typename?: 'models_var_pop_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "models" */
export type Models_Var_Pop_Order_By = {
  views?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Models_Var_Samp_Fields = {
  __typename?: 'models_var_samp_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "models" */
export type Models_Var_Samp_Order_By = {
  views?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Models_Variance_Fields = {
  __typename?: 'models_variance_fields';
  views?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "models" */
export type Models_Variance_Order_By = {
  views?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "model_views" */
  delete_model_views?: Maybe<Model_Views_Mutation_Response>;
  /** delete data from the table: "models" */
  delete_models?: Maybe<Models_Mutation_Response>;
  /** delete single row from the table: "models" */
  delete_models_by_pk?: Maybe<Models>;
  /** delete data from the table: "subscribers" */
  delete_subscribers?: Maybe<Subscribers_Mutation_Response>;
  /** delete single row from the table: "subscribers" */
  delete_subscribers_by_pk?: Maybe<Subscribers>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "model_views" */
  insert_model_views?: Maybe<Model_Views_Mutation_Response>;
  /** insert a single row into the table: "model_views" */
  insert_model_views_one?: Maybe<Model_Views>;
  /** insert data into the table: "models" */
  insert_models?: Maybe<Models_Mutation_Response>;
  /** insert a single row into the table: "models" */
  insert_models_one?: Maybe<Models>;
  /** insert data into the table: "subscribers" */
  insert_subscribers?: Maybe<Subscribers_Mutation_Response>;
  /** insert a single row into the table: "subscribers" */
  insert_subscribers_one?: Maybe<Subscribers>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "model_views" */
  update_model_views?: Maybe<Model_Views_Mutation_Response>;
  /** update data of the table: "models" */
  update_models?: Maybe<Models_Mutation_Response>;
  /** update single row of the table: "models" */
  update_models_by_pk?: Maybe<Models>;
  /** update data of the table: "subscribers" */
  update_subscribers?: Maybe<Subscribers_Mutation_Response>;
  /** update single row of the table: "subscribers" */
  update_subscribers_by_pk?: Maybe<Subscribers>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Model_ViewsArgs = {
  where: Model_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ModelsArgs = {
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Models_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SubscribersArgs = {
  where: Subscribers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscribers_By_PkArgs = {
  subscribe_id: Scalars['String'];
  userid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Model_ViewsArgs = {
  objects: Array<Model_Views_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Model_Views_OneArgs = {
  object: Model_Views_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ModelsArgs = {
  objects: Array<Models_Insert_Input>;
  on_conflict?: Maybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Models_OneArgs = {
  object: Models_Insert_Input;
  on_conflict?: Maybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubscribersArgs = {
  objects: Array<Subscribers_Insert_Input>;
  on_conflict?: Maybe<Subscribers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribers_OneArgs = {
  object: Subscribers_Insert_Input;
  on_conflict?: Maybe<Subscribers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Model_ViewsArgs = {
  _inc?: Maybe<Model_Views_Inc_Input>;
  _set?: Maybe<Model_Views_Set_Input>;
  where: Model_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ModelsArgs = {
  _inc?: Maybe<Models_Inc_Input>;
  _set?: Maybe<Models_Set_Input>;
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Models_By_PkArgs = {
  _inc?: Maybe<Models_Inc_Input>;
  _set?: Maybe<Models_Set_Input>;
  pk_columns: Models_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubscribersArgs = {
  _set?: Maybe<Subscribers_Set_Input>;
  where: Subscribers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribers_By_PkArgs = {
  _set?: Maybe<Subscribers_Set_Input>;
  pk_columns: Subscribers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "model_views" */
  model_views: Array<Model_Views>;
  /** fetch aggregated fields from the table: "model_views" */
  model_views_aggregate: Model_Views_Aggregate;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch aggregated fields from the table: "models" */
  models_aggregate: Models_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** An array relationship */
  subscribers: Array<Subscribers>;
  /** An aggregate relationship */
  subscribers_aggregate: Subscribers_Aggregate;
  /** fetch data from the table: "subscribers" using primary key columns */
  subscribers_by_pk?: Maybe<Subscribers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootModel_ViewsArgs = {
  distinct_on?: Maybe<Array<Model_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Views_Order_By>>;
  where?: Maybe<Model_Views_Bool_Exp>;
};


export type Query_RootModel_Views_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Views_Order_By>>;
  where?: Maybe<Model_Views_Bool_Exp>;
};


export type Query_RootModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


export type Query_RootModels_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


export type Query_RootModels_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSubscribersArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


export type Query_RootSubscribers_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


export type Query_RootSubscribers_By_PkArgs = {
  subscribe_id: Scalars['String'];
  userid: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "subscribers" */
export type Subscribers = {
  __typename?: 'subscribers';
  created_at: Scalars['timestamptz'];
  subscribe_id: Scalars['String'];
  /** An object relationship */
  subscribed: Users;
  /** An object relationship */
  subscription: Users;
  updated_at: Scalars['timestamptz'];
  userid: Scalars['String'];
};

/** aggregated selection of "subscribers" */
export type Subscribers_Aggregate = {
  __typename?: 'subscribers_aggregate';
  aggregate?: Maybe<Subscribers_Aggregate_Fields>;
  nodes: Array<Subscribers>;
};

/** aggregate fields of "subscribers" */
export type Subscribers_Aggregate_Fields = {
  __typename?: 'subscribers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Subscribers_Max_Fields>;
  min?: Maybe<Subscribers_Min_Fields>;
};


/** aggregate fields of "subscribers" */
export type Subscribers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Subscribers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "subscribers" */
export type Subscribers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Subscribers_Max_Order_By>;
  min?: Maybe<Subscribers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "subscribers" */
export type Subscribers_Arr_Rel_Insert_Input = {
  data: Array<Subscribers_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Subscribers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "subscribers". All fields are combined with a logical 'AND'. */
export type Subscribers_Bool_Exp = {
  _and?: Maybe<Array<Subscribers_Bool_Exp>>;
  _not?: Maybe<Subscribers_Bool_Exp>;
  _or?: Maybe<Array<Subscribers_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  subscribe_id?: Maybe<String_Comparison_Exp>;
  subscribed?: Maybe<Users_Bool_Exp>;
  subscription?: Maybe<Users_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  userid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscribers" */
export enum Subscribers_Constraint {
  /** unique or primary key constraint */
  SubscribersPkey = 'subscribers_pkey'
}

/** input type for inserting data into table "subscribers" */
export type Subscribers_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  subscribe_id?: Maybe<Scalars['String']>;
  subscribed?: Maybe<Users_Obj_Rel_Insert_Input>;
  subscription?: Maybe<Users_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Subscribers_Max_Fields = {
  __typename?: 'subscribers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  subscribe_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "subscribers" */
export type Subscribers_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  subscribe_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Subscribers_Min_Fields = {
  __typename?: 'subscribers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  subscribe_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "subscribers" */
export type Subscribers_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  subscribe_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userid?: Maybe<Order_By>;
};

/** response of any mutation on the table "subscribers" */
export type Subscribers_Mutation_Response = {
  __typename?: 'subscribers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscribers>;
};

/** on conflict condition type for table "subscribers" */
export type Subscribers_On_Conflict = {
  constraint: Subscribers_Constraint;
  update_columns?: Array<Subscribers_Update_Column>;
  where?: Maybe<Subscribers_Bool_Exp>;
};

/** Ordering options when selecting data from "subscribers". */
export type Subscribers_Order_By = {
  created_at?: Maybe<Order_By>;
  subscribe_id?: Maybe<Order_By>;
  subscribed?: Maybe<Users_Order_By>;
  subscription?: Maybe<Users_Order_By>;
  updated_at?: Maybe<Order_By>;
  userid?: Maybe<Order_By>;
};

/** primary key columns input for table: subscribers */
export type Subscribers_Pk_Columns_Input = {
  subscribe_id: Scalars['String'];
  userid: Scalars['String'];
};

/** select columns of table "subscribers" */
export enum Subscribers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SubscribeId = 'subscribe_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Userid = 'userid'
}

/** input type for updating data in table "subscribers" */
export type Subscribers_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  subscribe_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userid?: Maybe<Scalars['String']>;
};

/** update columns of table "subscribers" */
export enum Subscribers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SubscribeId = 'subscribe_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Userid = 'userid'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "model_views" */
  model_views: Array<Model_Views>;
  /** fetch aggregated fields from the table: "model_views" */
  model_views_aggregate: Model_Views_Aggregate;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch aggregated fields from the table: "models" */
  models_aggregate: Models_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** An array relationship */
  subscribers: Array<Subscribers>;
  /** An aggregate relationship */
  subscribers_aggregate: Subscribers_Aggregate;
  /** fetch data from the table: "subscribers" using primary key columns */
  subscribers_by_pk?: Maybe<Subscribers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootModel_ViewsArgs = {
  distinct_on?: Maybe<Array<Model_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Views_Order_By>>;
  where?: Maybe<Model_Views_Bool_Exp>;
};


export type Subscription_RootModel_Views_AggregateArgs = {
  distinct_on?: Maybe<Array<Model_Views_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Model_Views_Order_By>>;
  where?: Maybe<Model_Views_Bool_Exp>;
};


export type Subscription_RootModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


export type Subscription_RootModels_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


export type Subscription_RootModels_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSubscribersArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


export type Subscription_RootSubscribers_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


export type Subscription_RootSubscribers_By_PkArgs = {
  subscribe_id: Scalars['String'];
  userid: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  profile_photo_url: Scalars['String'];
  /** An array relationship */
  subscribers: Array<Subscribers>;
  /** An array relationship */
  subscribersByUserid: Array<Subscribers>;
  /** An aggregate relationship */
  subscribersByUserid_aggregate: Subscribers_Aggregate;
  /** An aggregate relationship */
  subscribers_aggregate: Subscribers_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  usersModelArrayRelation: Array<Models>;
  /** An aggregate relationship */
  usersModelArrayRelation_aggregate: Models_Aggregate;
};


/** columns and relationships of "users" */
export type UsersSubscribersArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSubscribersByUseridArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSubscribersByUserid_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSubscribers_AggregateArgs = {
  distinct_on?: Maybe<Array<Subscribers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subscribers_Order_By>>;
  where?: Maybe<Subscribers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersModelArrayRelationArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersModelArrayRelation_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  profile_photo_url?: Maybe<String_Comparison_Exp>;
  subscribers?: Maybe<Subscribers_Bool_Exp>;
  subscribersByUserid?: Maybe<Subscribers_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  usersModelArrayRelation?: Maybe<Models_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  subscribers?: Maybe<Subscribers_Arr_Rel_Insert_Input>;
  subscribersByUserid?: Maybe<Subscribers_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  usersModelArrayRelation?: Maybe<Models_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  profile_photo_url?: Maybe<Order_By>;
  subscribersByUserid_aggregate?: Maybe<Subscribers_Aggregate_Order_By>;
  subscribers_aggregate?: Maybe<Subscribers_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  usersModelArrayRelation_aggregate?: Maybe<Models_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type InsertModelMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  model_url: Scalars['String'];
  thumbnail_url: Scalars['String'];
  owner_id: Scalars['String'];
}>;


export type InsertModelMutation = { __typename?: 'mutation_root', insert_models_one?: { __typename?: 'models', id: string, description: string, created_at: any, model_url: string, owner_id: string, thumbnail_url?: string | null | undefined, title: string, updated_at: any, views: number } | null | undefined };

export type InsertUserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: string, name: string, email: string, profile_photo_url: string, created_at: any, updated_at: any } | null | undefined };

export type DeleteSubscribeMutationVariables = Exact<{
  subscribe_id: Scalars['String'];
  userid: Scalars['String'];
}>;


export type DeleteSubscribeMutation = { __typename?: 'mutation_root', delete_subscribers_by_pk?: { __typename?: 'subscribers', userid: string, subscribe_id: string } | null | undefined };

export type InsertSubscribeMutationVariables = Exact<{
  userid: Scalars['String'];
  subscribe_id: Scalars['String'];
}>;


export type InsertSubscribeMutation = { __typename?: 'mutation_root', insert_subscribers_one?: { __typename?: 'subscribers', userid: string, subscribe_id: string } | null | undefined };

export type UpdateModelViewsMutationVariables = Exact<{
  modelId: Scalars['String'];
}>;


export type UpdateModelViewsMutation = { __typename?: 'mutation_root', update_model_views?: { __typename?: 'model_views_mutation_response', returning: Array<{ __typename?: 'model_views', id?: string | null | undefined, views?: number | null | undefined }> } | null | undefined };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  profile_photo_url?: Maybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: string, name: string, email: string, profile_photo_url: string, created_at: any, updated_at: any, subscribersByUserid: Array<{ __typename?: 'subscribers', subscribe_id: string }> } | null | undefined };

export type ChannelListQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ChannelListQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', name: string, subscribersByUserid: Array<{ __typename?: 'subscribers', subscribed: { __typename?: 'users', name: string, id: string, profile_photo_url: string, usersModelArrayRelation: Array<{ __typename?: 'models', id: string, title: string, description: string, thumbnail_url?: string | null | undefined, model_url: string, views: number, created_at: any, updated_at: any }> } }> } | null | undefined };

export type ModelByPkQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ModelByPkQuery = { __typename?: 'query_root', models_by_pk?: { __typename?: 'models', id: string, description: string, title: string, thumbnail_url?: string | null | undefined, model_url: string, views: number, created_at: any, updated_at: any, owner?: { __typename?: 'users', id: string, name: string, profile_photo_url: string, email: string, updated_at: any, created_at: any } | null | undefined } | null | undefined };

export type ModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ModelsQuery = { __typename?: 'query_root', models: Array<{ __typename?: 'models', id: string, title: string, description: string, thumbnail_url?: string | null | undefined, model_url: string, views: number, updated_at: any, created_at: any, owner?: { __typename?: 'users', id: string, email: string, name: string, profile_photo_url: string, updated_at: any, created_at: any } | null | undefined }> };

export type RecommendModelsQueryVariables = Exact<{
  currentModelId: Scalars['String'];
}>;


export type RecommendModelsQuery = { __typename?: 'query_root', models: Array<{ __typename?: 'models', id: string, title: string, description: string, thumbnail_url?: string | null | undefined, model_url: string, views: number, created_at: any, updated_at: any, owner?: { __typename?: 'users', id: string, name: string, profile_photo_url: string, updated_at: any, email: string, created_at: any } | null | undefined }> };

export type SubscribersQueryVariables = Exact<{
  ownerid: Scalars['String'];
}>;


export type SubscribersQuery = { __typename?: 'query_root', subscribers: Array<{ __typename?: 'subscribers', userid: string }> };

export type UserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, name: string, email: string, profile_photo_url: string, created_at: any, updated_at: any, subscribersByUserid: Array<{ __typename?: 'subscribers', subscribe_id: string }> } | null | undefined };


export const InsertModelDocument = gql`
    mutation InsertModel($id: String!, $title: String!, $description: String = "", $model_url: String!, $thumbnail_url: String!, $owner_id: String!) {
  insert_models_one(
    object: {id: $id, title: $title, description: $description, model_url: $model_url, thumbnail_url: $thumbnail_url, owner_id: $owner_id, views: 0}
  ) {
    id
    description
    created_at
    model_url
    owner_id
    thumbnail_url
    title
    updated_at
    views
  }
}
    `;
export type InsertModelMutationFn = Apollo.MutationFunction<InsertModelMutation, InsertModelMutationVariables>;

/**
 * __useInsertModelMutation__
 *
 * To run a mutation, you first call `useInsertModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertModelMutation, { data, loading, error }] = useInsertModelMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      model_url: // value for 'model_url'
 *      thumbnail_url: // value for 'thumbnail_url'
 *      owner_id: // value for 'owner_id'
 *   },
 * });
 */
export function useInsertModelMutation(baseOptions?: Apollo.MutationHookOptions<InsertModelMutation, InsertModelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertModelMutation, InsertModelMutationVariables>(InsertModelDocument, options);
      }
export type InsertModelMutationHookResult = ReturnType<typeof useInsertModelMutation>;
export type InsertModelMutationResult = Apollo.MutationResult<InsertModelMutation>;
export type InsertModelMutationOptions = Apollo.BaseMutationOptions<InsertModelMutation, InsertModelMutationVariables>;
export const InsertUserDocument = gql`
    mutation InsertUser($id: String!, $name: String!, $email: String!) {
  insert_users_one(
    object: {id: $id, name: $name, email: $email, profile_photo_url: ""}
  ) {
    id
    name
    email
    profile_photo_url
    created_at
    updated_at
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const DeleteSubscribeDocument = gql`
    mutation deleteSubscribe($subscribe_id: String!, $userid: String!) {
  delete_subscribers_by_pk(subscribe_id: $subscribe_id, userid: $userid) {
    userid
    subscribe_id
  }
}
    `;
export type DeleteSubscribeMutationFn = Apollo.MutationFunction<DeleteSubscribeMutation, DeleteSubscribeMutationVariables>;

/**
 * __useDeleteSubscribeMutation__
 *
 * To run a mutation, you first call `useDeleteSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubscribeMutation, { data, loading, error }] = useDeleteSubscribeMutation({
 *   variables: {
 *      subscribe_id: // value for 'subscribe_id'
 *      userid: // value for 'userid'
 *   },
 * });
 */
export function useDeleteSubscribeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubscribeMutation, DeleteSubscribeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubscribeMutation, DeleteSubscribeMutationVariables>(DeleteSubscribeDocument, options);
      }
export type DeleteSubscribeMutationHookResult = ReturnType<typeof useDeleteSubscribeMutation>;
export type DeleteSubscribeMutationResult = Apollo.MutationResult<DeleteSubscribeMutation>;
export type DeleteSubscribeMutationOptions = Apollo.BaseMutationOptions<DeleteSubscribeMutation, DeleteSubscribeMutationVariables>;
export const InsertSubscribeDocument = gql`
    mutation InsertSubscribe($userid: String!, $subscribe_id: String!) {
  insert_subscribers_one(object: {userid: $userid, subscribe_id: $subscribe_id}) {
    userid
    subscribe_id
  }
}
    `;
export type InsertSubscribeMutationFn = Apollo.MutationFunction<InsertSubscribeMutation, InsertSubscribeMutationVariables>;

/**
 * __useInsertSubscribeMutation__
 *
 * To run a mutation, you first call `useInsertSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSubscribeMutation, { data, loading, error }] = useInsertSubscribeMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      subscribe_id: // value for 'subscribe_id'
 *   },
 * });
 */
export function useInsertSubscribeMutation(baseOptions?: Apollo.MutationHookOptions<InsertSubscribeMutation, InsertSubscribeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSubscribeMutation, InsertSubscribeMutationVariables>(InsertSubscribeDocument, options);
      }
export type InsertSubscribeMutationHookResult = ReturnType<typeof useInsertSubscribeMutation>;
export type InsertSubscribeMutationResult = Apollo.MutationResult<InsertSubscribeMutation>;
export type InsertSubscribeMutationOptions = Apollo.BaseMutationOptions<InsertSubscribeMutation, InsertSubscribeMutationVariables>;
export const UpdateModelViewsDocument = gql`
    mutation updateModelViews($modelId: String!) {
  update_model_views(where: {id: {_eq: $modelId}}, _inc: {views: 1}) {
    returning {
      id
      views
    }
  }
}
    `;
export type UpdateModelViewsMutationFn = Apollo.MutationFunction<UpdateModelViewsMutation, UpdateModelViewsMutationVariables>;

/**
 * __useUpdateModelViewsMutation__
 *
 * To run a mutation, you first call `useUpdateModelViewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateModelViewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateModelViewsMutation, { data, loading, error }] = useUpdateModelViewsMutation({
 *   variables: {
 *      modelId: // value for 'modelId'
 *   },
 * });
 */
export function useUpdateModelViewsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateModelViewsMutation, UpdateModelViewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateModelViewsMutation, UpdateModelViewsMutationVariables>(UpdateModelViewsDocument, options);
      }
export type UpdateModelViewsMutationHookResult = ReturnType<typeof useUpdateModelViewsMutation>;
export type UpdateModelViewsMutationResult = Apollo.MutationResult<UpdateModelViewsMutation>;
export type UpdateModelViewsMutationOptions = Apollo.BaseMutationOptions<UpdateModelViewsMutation, UpdateModelViewsMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: String!, $name: String!, $profile_photo_url: String) {
  update_users_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, profile_photo_url: $profile_photo_url}
  ) {
    id
    name
    email
    profile_photo_url
    created_at
    updated_at
    subscribersByUserid {
      subscribe_id
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      profile_photo_url: // value for 'profile_photo_url'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const ChannelListDocument = gql`
    query ChannelList($id: String!) {
  users_by_pk(id: $id) {
    name
    subscribersByUserid(order_by: {created_at: desc_nulls_last}) {
      subscribed {
        name
        id
        profile_photo_url
        usersModelArrayRelation(order_by: {created_at: desc_nulls_last}, limit: 3) {
          id
          title
          description
          thumbnail_url
          model_url
          views
          created_at
          updated_at
        }
      }
    }
  }
}
    `;

/**
 * __useChannelListQuery__
 *
 * To run a query within a React component, call `useChannelListQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChannelListQuery(baseOptions: Apollo.QueryHookOptions<ChannelListQuery, ChannelListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelListQuery, ChannelListQueryVariables>(ChannelListDocument, options);
      }
export function useChannelListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelListQuery, ChannelListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelListQuery, ChannelListQueryVariables>(ChannelListDocument, options);
        }
export type ChannelListQueryHookResult = ReturnType<typeof useChannelListQuery>;
export type ChannelListLazyQueryHookResult = ReturnType<typeof useChannelListLazyQuery>;
export type ChannelListQueryResult = Apollo.QueryResult<ChannelListQuery, ChannelListQueryVariables>;
export const ModelByPkDocument = gql`
    query ModelByPk($id: String!) {
  models_by_pk(id: $id) {
    id
    description
    title
    thumbnail_url
    model_url
    views
    created_at
    updated_at
    owner {
      id
      name
      profile_photo_url
      email
      updated_at
      created_at
    }
  }
}
    `;

/**
 * __useModelByPkQuery__
 *
 * To run a query within a React component, call `useModelByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useModelByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModelByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useModelByPkQuery(baseOptions: Apollo.QueryHookOptions<ModelByPkQuery, ModelByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModelByPkQuery, ModelByPkQueryVariables>(ModelByPkDocument, options);
      }
export function useModelByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModelByPkQuery, ModelByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModelByPkQuery, ModelByPkQueryVariables>(ModelByPkDocument, options);
        }
export type ModelByPkQueryHookResult = ReturnType<typeof useModelByPkQuery>;
export type ModelByPkLazyQueryHookResult = ReturnType<typeof useModelByPkLazyQuery>;
export type ModelByPkQueryResult = Apollo.QueryResult<ModelByPkQuery, ModelByPkQueryVariables>;
export const ModelsDocument = gql`
    query Models {
  models(order_by: {created_at: desc}) {
    id
    title
    description
    thumbnail_url
    model_url
    owner {
      id
      email
      name
      profile_photo_url
      updated_at
      created_at
    }
    views
    updated_at
    created_at
  }
}
    `;

/**
 * __useModelsQuery__
 *
 * To run a query within a React component, call `useModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useModelsQuery(baseOptions?: Apollo.QueryHookOptions<ModelsQuery, ModelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModelsQuery, ModelsQueryVariables>(ModelsDocument, options);
      }
export function useModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModelsQuery, ModelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModelsQuery, ModelsQueryVariables>(ModelsDocument, options);
        }
export type ModelsQueryHookResult = ReturnType<typeof useModelsQuery>;
export type ModelsLazyQueryHookResult = ReturnType<typeof useModelsLazyQuery>;
export type ModelsQueryResult = Apollo.QueryResult<ModelsQuery, ModelsQueryVariables>;
export const RecommendModelsDocument = gql`
    query RecommendModels($currentModelId: String!) {
  models(where: {id: {_neq: $currentModelId}}, order_by: {views: desc}) {
    id
    title
    description
    thumbnail_url
    model_url
    views
    owner {
      id
      name
      profile_photo_url
      updated_at
      email
      created_at
    }
    created_at
    updated_at
  }
}
    `;

/**
 * __useRecommendModelsQuery__
 *
 * To run a query within a React component, call `useRecommendModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendModelsQuery({
 *   variables: {
 *      currentModelId: // value for 'currentModelId'
 *   },
 * });
 */
export function useRecommendModelsQuery(baseOptions: Apollo.QueryHookOptions<RecommendModelsQuery, RecommendModelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecommendModelsQuery, RecommendModelsQueryVariables>(RecommendModelsDocument, options);
      }
export function useRecommendModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecommendModelsQuery, RecommendModelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecommendModelsQuery, RecommendModelsQueryVariables>(RecommendModelsDocument, options);
        }
export type RecommendModelsQueryHookResult = ReturnType<typeof useRecommendModelsQuery>;
export type RecommendModelsLazyQueryHookResult = ReturnType<typeof useRecommendModelsLazyQuery>;
export type RecommendModelsQueryResult = Apollo.QueryResult<RecommendModelsQuery, RecommendModelsQueryVariables>;
export const SubscribersDocument = gql`
    query Subscribers($ownerid: String!) {
  subscribers(where: {subscribe_id: {_eq: $ownerid}}) {
    userid
  }
}
    `;

/**
 * __useSubscribersQuery__
 *
 * To run a query within a React component, call `useSubscribersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscribersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribersQuery({
 *   variables: {
 *      ownerid: // value for 'ownerid'
 *   },
 * });
 */
export function useSubscribersQuery(baseOptions: Apollo.QueryHookOptions<SubscribersQuery, SubscribersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubscribersQuery, SubscribersQueryVariables>(SubscribersDocument, options);
      }
export function useSubscribersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubscribersQuery, SubscribersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubscribersQuery, SubscribersQueryVariables>(SubscribersDocument, options);
        }
export type SubscribersQueryHookResult = ReturnType<typeof useSubscribersQuery>;
export type SubscribersLazyQueryHookResult = ReturnType<typeof useSubscribersLazyQuery>;
export type SubscribersQueryResult = Apollo.QueryResult<SubscribersQuery, SubscribersQueryVariables>;
export const UserByIdDocument = gql`
    query UserById($id: String!) {
  users_by_pk(id: $id) {
    id
    name
    email
    profile_photo_url
    created_at
    updated_at
    subscribersByUserid {
      subscribe_id
    }
  }
}
    `;

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions: Apollo.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
      }
export function useUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>;