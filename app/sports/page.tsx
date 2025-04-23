import { Grid, List, ListItem, Stack, Typography } from "@mui/material";

import { getArticles } from "@/app/actions";
import { Article } from "@/app/types/general";
import {
  HeadlinePost,
  SnippetPost,
  TitlePost,
} from "@/app/components/post-card";

export const dynamic = "force-dynamic";

export default async function WorldPage() {
  const articles = await getArticles("sports");

  // Should be 18 articles per category
  console.log(articles);

  if (!articles || articles.length === 0) {
    return (
      <main className="p-4 max-w-screen-xl mx-auto">
        <Typography variant="h4">No articles found.</Typography>
      </main>
    );
  }

  // Left column
  const featured = articles[0];
  const titles = articles.slice(1, 6);
  const thumbs = articles.slice(6, 9);

  // Middle column
  const headlinesBig = articles.slice(9, 12);

  // Right column
  const headlinesMedium = articles.slice(12, 14);
  const headlinesSmall = articles.slice(14, 18);

  return (
    <main>
      <section>
        <Typography variant="headline" className="!pb-8 block">
          Sports
        </Typography>
        <Grid container spacing={3}>
          {/* Left */}
          <Grid size={5}>
            <Stack direction="column" gap={1}>
              <HeadlinePost {...featured} />
              <Stack>
                <List dense sx={{ listStyleType: "disc", pl: 4 }}>
                  {titles.map((article: Article) => (
                    <ListItem sx={{ display: "list-item" }} key={article.id}>
                      <TitlePost
                        key={article.id}
                        slug={article.slug}
                        title={article.title}
                      />
                    </ListItem>
                  ))}
                </List>
              </Stack>
              <Stack direction="row" gap={1}>
                {thumbs.map((article: Article) => (
                  <SnippetPost key={article.id} {...article} type="vertical" />
                ))}
              </Stack>
            </Stack>
          </Grid>
          {/* Middle */}
          <Grid size={4}>
            <Stack direction="column" gap={2}>
              {headlinesBig.map((article: Article) => (
                <HeadlinePost key={article.id} {...article} />
              ))}
            </Stack>
          </Grid>
          {/* Right */}
          <Grid size={3}>
            <Stack direction="column" gap={2}>
              {headlinesMedium.map((article: Article) => (
                <HeadlinePost key={article.id} {...article} />
              ))}

              {headlinesSmall.map((article: Article) => (
                <SnippetPost
                  key={article.id}
                  slug={article.slug}
                  image_url={article.image_url}
                  title={article.title}
                  type="horizontal"
                  className="border-t border-gray-300 pt-4"
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </section>
    </main>
  );
}
