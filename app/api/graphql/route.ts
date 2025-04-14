import { createYoga, createSchema } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: `
    type Article {
    id: ID!
    title: String!
    content: String!
    excerpt: String!
    slug: String!
    imageUrl: String
    publishedAt: String!
    categories: [Category!]!
    }

    type Category {
    id: ID!
    name: String!
    slug: String!
    articles: [Article!]!
    }

    type Query {
    articles: [Article!]!
    article(slug: String!): Article
    categories: [Category!]!
    category(slug: String!): Category
    }
  `,
    resolvers: {
      Query: {
        articles: () =>
          prisma.article.findMany({
            include: { categories: true },
          }),
        article: (_, { slug }) =>
          prisma.article.findUnique({
            where: { slug },
            include: { categories: true },
          }),
        categories: () => prisma.category.findMany(),
        category: (_, { slug }) =>
          prisma.category.findUnique({
            where: { slug },
            include: { articles: true },
          }),
      },
    },
  }),
});

export const GET = (req: Request) => handleRequest(req, {});
export const POST = (req: Request) => handleRequest(req, {});
