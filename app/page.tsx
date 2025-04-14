import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import { getArticles } from "@/app/actions";
import { Article } from "@/app/types/general";

export const dynamic = "force-dynamic"; // for SSR

export default async function HomePage() {
  const articles = await getArticles();

  console.log(articles);

  if (!articles || articles.length === 0) {
    return (
      <main className="p-4 max-w-screen-xl mx-auto">
        <Typography variant="h4">No articles found.</Typography>
      </main>
    );
  }

  const featured = articles[0];
  const rest = articles.slice(1, 5);
  const moreArticles = articles.slice(5);

  return (
    <main>
      <section>
        <Grid container spacing={2}>
          <Grid size={5}>
            <Stack
              className="border-amber-600 border"
              direction="column"
              gap={1}
            >
              <Link href={`/article/${featured.slug}`}>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Typography variant="h3">{featured.title}</Typography>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className="w-full h-auto object-cover"
                    src={featured.image_url}
                    alt="featured image"
                  />
                  <Typography variant="h5">{featured.excerpt}</Typography>
                </Box>
              </Link>
              <Stack>
                {rest.map((article: Article) => (
                  <Box key={article.id} mb={2}>
                    <Typography variant="h6" sx={{ cursor: "pointer" }}>
                      {article.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={4}>
            <div className="w-full border-amber-600 border">Articles</div>
          </Grid>
          <Grid size={3}>
            <div className="w-full border-amber-600 border">Articles</div>
          </Grid>
        </Grid>
      </section>
    </main>
  );
}
