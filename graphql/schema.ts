export const typeDefs = `
  type Article {
    id: ID!
    title: String!
    slug: String!
    excerpt: String!
    content: String!
    imageUrl: String!
    createdAt: String!
    updatedAt: String!
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
    articles: [Article!]!
  }

  type Query {
    article(slug: String!): Article
    articles(take: Int): [Article!]!
    categories: [Category!]!
  }
`;
