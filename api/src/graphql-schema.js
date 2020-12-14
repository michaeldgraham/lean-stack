import { neo4jgraphql, cypher } from 'neo4j-graphql-js'
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type A {
    id: ID! @id
    name: String
    ab: [B] @relation(name: "AB", direction: OUT)
  }

  type B {
    id: ID! @id
    name: String
  }
`;

export const resolvers = {};