import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type PostCardProps = {
  slug?: string;
  title?: string;
  image_url?: string;
  excerpt?: string;
  type: "featured" | "only-title" | "headline-vertical" | "headline-horizontal";
  titleSize?: "large" | "medium" | "small";
};

type FeaturedProps = {
  slug: string;
  title: string;
  image_url: string;
  excerpt: string;
};

const CustomText = ({
  text,
  variant,
}: {
  text: string;
  variant: "largeTitle" | "mediumTitle" | "smallTitle";
}) => (
  <Typography
    variant={variant}
    sx={{
      "&:hover": {
        textDecoration: "underline",
      },
    }}
  >
    {text}
  </Typography>
);

const CustomImage = ({ image_url }: { image_url: string }) => (
  <Image
    width={0}
    height={0}
    sizes="100vw"
    priority
    className="w-full h-auto object-cover rounded-sm hover:opacity-60 duration-300"
    src={image_url}
    alt="featured image"
  />
);

export const SnippetPost = ({
  slug,
  image_url,
  title,
  type,
}: {
  slug: string;
  image_url: string;
  title: string;
  type: "horizontal" | "vertical";
}) => (
  <Link href={`/article/${slug}`}>
    <Stack flexDirection={type === "horizontal" ? "row" : "column"} gap={1}>
      <CustomImage image_url={image_url} />
      <CustomText text={title} variant="smallTitle" />
    </Stack>
  </Link>
);

export const FeaturedPost: FC<FeaturedProps> = ({
  slug,
  title,
  image_url,
  excerpt,
}) => (
  <Link href={`/article/${slug}`}>
    <Box display="flex" flexDirection="column" gap={1}>
      <CustomText text={title} variant="largeTitle" />
      <CustomImage image_url={image_url} />
      <CustomText text={excerpt} variant="mediumTitle" />
    </Box>
  </Link>
);

type HeadlineProps = {
  slug: string;
  title: string;
  image_url: string;
  titleSize?: "medium" | "small";
};

export const HeadlinePost: FC<HeadlineProps> = ({
  slug,
  title,
  image_url,
  titleSize = "medium",
}) => (
  <Link href={`/article/${slug}`}>
    <Box display="flex" flexDirection="column" gap={1}>
      <CustomImage image_url={image_url} />
      <CustomText
        text={title}
        variant={titleSize === "small" ? "smallTitle" : "mediumTitle"}
      />
    </Box>
  </Link>
);

export const TitlePost = ({ slug, title }: { slug: string; title: string }) => (
  <Link href={`/article/${slug}`}>
    <CustomText text={title} variant="smallTitle" />
  </Link>
);
