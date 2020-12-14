export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Query {
  readonly __typename?: 'Query';
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for A type nodes. */
  readonly A?: Maybe<ReadonlyArray<Maybe<A>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for B type nodes. */
  readonly B?: Maybe<ReadonlyArray<Maybe<B>>>;
  readonly location?: Maybe<Location>;
}


export interface QueryAArgs {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReadonlyArray<Maybe<_AOrdering>>>;
  filter?: Maybe<_AFilter>;
}


export interface QueryBArgs {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReadonlyArray<Maybe<_BOrdering>>>;
  filter?: Maybe<_BFilter>;
}

export const enum _AOrdering {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
};

export interface _AFilter {
  readonly AND?: Maybe<ReadonlyArray<_AFilter>>;
  readonly OR?: Maybe<ReadonlyArray<_AFilter>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly ab?: Maybe<_BFilter>;
  readonly ab_not?: Maybe<_BFilter>;
  readonly ab_in?: Maybe<ReadonlyArray<_BFilter>>;
  readonly ab_not_in?: Maybe<ReadonlyArray<_BFilter>>;
  readonly ab_some?: Maybe<_BFilter>;
  readonly ab_none?: Maybe<_BFilter>;
  readonly ab_single?: Maybe<_BFilter>;
  readonly ab_every?: Maybe<_BFilter>;
}

export interface _BFilter {
  readonly AND?: Maybe<ReadonlyArray<_BFilter>>;
  readonly OR?: Maybe<ReadonlyArray<_BFilter>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
}

export interface A {
  readonly __typename?: 'A';
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly ab?: Maybe<ReadonlyArray<Maybe<B>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  readonly _id?: Maybe<Scalars['String']>;
}


export interface AabArgs {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReadonlyArray<Maybe<_BOrdering>>>;
  filter?: Maybe<_BFilter>;
}

export const enum _BOrdering {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
};

export interface B {
  readonly __typename?: 'B';
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  readonly _id?: Maybe<Scalars['String']>;
}

export interface Mutation {
  readonly __typename?: 'Mutation';
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the AB relationship. */
  readonly AddAAb?: Maybe<_AddAAbPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the AB relationship. */
  readonly RemoveAAb?: Maybe<_RemoveAAbPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the AB relationship. */
  readonly MergeAAb?: Maybe<_MergeAAbPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a A node. */
  readonly CreateA?: Maybe<A>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a A node. */
  readonly UpdateA?: Maybe<A>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a A node. */
  readonly DeleteA?: Maybe<A>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a A node. */
  readonly MergeA?: Maybe<A>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a B node. */
  readonly CreateB?: Maybe<B>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a B node. */
  readonly UpdateB?: Maybe<B>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a B node. */
  readonly DeleteB?: Maybe<B>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a B node. */
  readonly MergeB?: Maybe<B>;
}


export interface MutationAddAAbArgs {
  from: _AInput;
  to: _BInput;
}


export interface MutationRemoveAAbArgs {
  from: _AInput;
  to: _BInput;
}


export interface MutationMergeAAbArgs {
  from: _AInput;
  to: _BInput;
}


export interface MutationCreateAArgs {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}


export interface MutationUpdateAArgs {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
}


export interface MutationDeleteAArgs {
  id: Scalars['ID'];
}


export interface MutationMergeAArgs {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
}


export interface MutationCreateBArgs {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}


export interface MutationUpdateBArgs {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
}


export interface MutationDeleteBArgs {
  id: Scalars['ID'];
}


export interface MutationMergeBArgs {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
}

export interface _AInput {
  readonly id: Scalars['ID'];
}

export interface _BInput {
  readonly id: Scalars['ID'];
}

export interface _AddAAbPayload {
  readonly __typename?: '_AddAAbPayload';
  /** Field for the A node this AB [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  readonly from?: Maybe<A>;
  /** Field for the B node this AB [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  readonly to?: Maybe<B>;
}

export interface _RemoveAAbPayload {
  readonly __typename?: '_RemoveAAbPayload';
  /** Field for the A node this AB [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  readonly from?: Maybe<A>;
  /** Field for the B node this AB [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  readonly to?: Maybe<B>;
}

export interface _MergeAAbPayload {
  readonly __typename?: '_MergeAAbPayload';
  /** Field for the A node this AB [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  readonly from?: Maybe<A>;
  /** Field for the B node this AB [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  readonly to?: Maybe<B>;
}

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jTimeInput {
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  readonly timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export interface _Neo4jTime {
  readonly __typename?: '_Neo4jTime';
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  readonly timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jDateInput {
  readonly year?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly day?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export interface _Neo4jDate {
  readonly __typename?: '_Neo4jDate';
  readonly year?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly day?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jDateTimeInput {
  readonly year?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly day?: Maybe<Scalars['Int']>;
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  readonly timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export interface _Neo4jDateTime {
  readonly __typename?: '_Neo4jDateTime';
  readonly year?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly day?: Maybe<Scalars['Int']>;
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  readonly timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jLocalTimeInput {
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export interface _Neo4jLocalTime {
  readonly __typename?: '_Neo4jLocalTime';
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export interface _Neo4jLocalDateTimeInput {
  readonly year?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly day?: Maybe<Scalars['Int']>;
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  readonly formatted?: Maybe<Scalars['String']>;
}

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export interface _Neo4jLocalDateTime {
  readonly __typename?: '_Neo4jLocalDateTime';
  readonly year?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly day?: Maybe<Scalars['Int']>;
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly millisecond?: Maybe<Scalars['Int']>;
  readonly microsecond?: Maybe<Scalars['Int']>;
  readonly nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  readonly formatted?: Maybe<Scalars['String']>;
}

export interface _Neo4jPointDistanceFilter {
  readonly point: _Neo4jPointInput;
  readonly distance: Scalars['Float'];
}

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export interface _Neo4jPointInput {
  readonly x?: Maybe<Scalars['Float']>;
  readonly y?: Maybe<Scalars['Float']>;
  readonly z?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly crs?: Maybe<Scalars['String']>;
  readonly srid?: Maybe<Scalars['Int']>;
}

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export interface _Neo4jPoint {
  readonly __typename?: '_Neo4jPoint';
  readonly x?: Maybe<Scalars['Float']>;
  readonly y?: Maybe<Scalars['Float']>;
  readonly z?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly crs?: Maybe<Scalars['String']>;
  readonly srid?: Maybe<Scalars['Int']>;
}

export const enum _RelationDirections {
  IN = 'IN',
  OUT = 'OUT'
};

export interface Location {
  readonly __typename?: 'Location';
  readonly pathname?: Maybe<Scalars['String']>;
  readonly search?: Maybe<Scalars['String']>;
  readonly origin?: Maybe<Scalars['String']>;
  readonly hash?: Maybe<Scalars['String']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly hostname?: Maybe<Scalars['String']>;
  readonly href?: Maybe<Scalars['String']>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly protocol?: Maybe<Scalars['String']>;
}

export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQueryData = (
  { readonly __typename?: 'Query' }
  & { readonly location?: Maybe<(
    { readonly __typename?: 'Location' }
    & Pick<Location, 'pathname'>
  )>, readonly A?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'A' }
    & Pick<A, 'id'>
  )>>> }
);

export type CreateAMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateAMutationData = (
  { readonly __typename?: 'Mutation' }
  & { readonly CreateA?: Maybe<(
    { readonly __typename?: 'A' }
    & Pick<A, 'id'>
  )> }
);

export type ReadAQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadAQueryData = (
  { readonly __typename?: 'Query' }
  & { readonly A?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'A' }
    & Pick<A, 'id'>
  )>>> }
);
