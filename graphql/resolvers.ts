import { PrismaClient } from "@prisma/client";

export const resolvers = {
  Query: {
    article: async (
      _parent: any,
      { slug }: { slug: string },
      { prisma }: { prisma: PrismaClient }
    ) => {
      return prisma.article.findUnique({
        where: { slug },
        include: { category: true },
      });
    },
    articles: async (
      _parent: any,
      { take }: { take?: number },
      { prisma }: { prisma: PrismaClient }
    ) => {
      return prisma.article.findMany({
        take: take || undefined,
        orderBy: { created_at: "desc" },
        include: { category: true },
      });
    },
    categories: async (
      _parent: any,
      _args: any,
      { prisma }: { prisma: PrismaClient }
    ) => {
      return prisma.category.findMany({
        include: { articles: true },
      });
    },
  },
};
