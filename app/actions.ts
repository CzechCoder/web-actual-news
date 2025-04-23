"use server";

import prisma from "@/app/lib/prisma-client";

const categoryIdMatch: { [key: string]: number } = {
  politics: 1,
  world: 2,
  business: 3,
  sports: 4,
  entertainment: 5,
};

export async function getArticles(category?: keyof typeof categoryIdMatch) {
  const categoryId: number = (category && categoryIdMatch[category]) || 0;
  console.log(categoryId);
  return await prisma.article.findMany({
    where: {
      ...(categoryId && { category_id: categoryId }), // Only filter by category if provided
    },
    include: {
      category: true,
    },
    orderBy: {
      id: "asc",
    },
    take: 20,
  });
}

// export async function getArticles() {
//   return await prisma.article.findMany({
//     include: {
//       category: true,
//     },
//     orderBy: {
//       id: "asc",
//     },
//     take: 20,
//   });
// }

// "use server";

// import prisma from "@/lib/prisma-client";

// export async function getArticles() {
//   return await prisma.article.findMany({
//     include: {
//       category: true,
//     },
//     orderBy: {
//       created_at: "desc",  // Note the underscore
//     },
//     take: 20,
//   });
// }

// export async function getArticles() {
//     try {
//       return await prisma.article.findMany({
//         include: {
//           category: true,
//         },
//         orderBy: {
//           created_at: "desc",
//         },
//         take: 20,
//       });
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//       return [];
//     }
//   }
