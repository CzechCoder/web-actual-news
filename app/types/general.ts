import {
  Article as PrismaArticle,
  Category as PrismaCategory,
} from "@prisma/client";

export type Article = PrismaArticle & {
  category: PrismaCategory;
};

export type Category = PrismaCategory & {
  articles: Article[];
};
