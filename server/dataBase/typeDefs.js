import { gql } from "apollo-server-express";

const NewsType = gql`
  type News {
    _id: ID
    type: Int
    title: String
    newsText: String
  }
  input NewsInput {
    type: Int
    title: String
    newsText: String
  }
  type Query {
    allNews(name: Int): [News]
    findNews(name: Int): [News]
    news(newsId: ID!): News
  }
  type Mutation {
    addNews(input: NewsInput!): News
    updateNews(id: ID!, input: NewsInput!): News
    deleteNews(id: ID!): Boolean
  }
`;

export default NewsType;
