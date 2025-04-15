"use server";

import prisma from "@/app/lib/prisma-client";

export async function getArticles() {
  return await prisma.article.findMany({
    include: {
      category: true,
    },
    orderBy: {
      id: "asc",
    },
    take: 20,
  });
}

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
