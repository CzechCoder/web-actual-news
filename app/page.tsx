import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

import { getArticles } from "@/app/actions";
import { Article } from "@/app/types/general";
import {
  FeaturedPost,
  HeadlinePost,
  SnippetPost,
  TitlePost,
} from "./components/post-card";

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

  // Left column
  const featured = articles[0];
  const titles = articles.slice(1, 7);
  const thumbs = articles.slice(7, 10);

  // Middle column
  const headlinesBig = articles.slice(10, 13);

  // Right column
  const headlinesMedium = articles.slice(13, 15);
  const headlinesSmall = articles.slice(15, 19);

  return (
    <main>
      <section>
        <Grid container spacing={3}>
          {/* Left */}
          <Grid size={5}>
            <Stack
              // className="border-amber-600 border"
              direction="column"
              gap={1}
            >
              <FeaturedPost {...featured} />
              <Stack>
                <List dense sx={{ listStyleType: "disc", pl: 4 }}>
                  {titles.map((article: Article) => (
                    <ListItem sx={{ display: "list-item" }}>
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
            {/* <div className="w-full border-amber-600 border">Articles</div> */}
            <Stack direction="column" gap={2}>
              {headlinesBig.map((article: Article) => (
                <HeadlinePost key={article.id} {...article} />
              ))}
            </Stack>
          </Grid>
          {/* Right */}
          <Grid size={3}>
            {/* <div className="w-full border-amber-600 border">Articles</div> */}
            <Stack direction="column" gap={2}>
              {headlinesMedium.map((article: Article) => (
                <HeadlinePost key={article.id} {...article} />
              ))}
              {headlinesSmall.map((article: Article) => (
                <SnippetPost key={article.id} {...article} type="horizontal" />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </section>
    </main>
  );
}
