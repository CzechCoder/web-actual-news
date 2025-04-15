import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type FeaturedProps = {
  slug: string;
  title: string;
  image_url: string;
  excerpt: string;
};

type HeadlineProps = {
  slug: string;
  title: string;
  image_url: string;
  titleSize?: "medium" | "small";
};

type SnippetProps = {
  slug: string;
  image_url: string;
  title: string;
  type: "horizontal" | "vertical" | "horizontal-reversed";
};

type TitleProps = { slug: string; title: string };

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

export const SnippetPost: FC<SnippetProps> = ({
  slug,
  image_url,
  title,
  type,
}) => (
  <Link href={`/article/${slug}`} style={{ textDecoration: "none" }}>
    {type === "horizontal" && <Divider sx={{ mb: 2 }} />}
    <Stack
      gap={1}
      direction={
        type === "horizontal"
          ? "row"
          : type === "horizontal-reversed"
          ? "row-reverse"
          : "column"
      }
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: type === "horizontal" ? "130px" : "100%",
          minWidth: type === "horizontal" ? "130px" : undefined,
          // aspectRatio: type === "horizontal" ? "1/1" : undefined,
        }}
      >
        <CustomImage image_url={image_url} />
      </Box>
      <Box
        sx={{
          flex: type === "horizontal" ? 1 : undefined,
          overflow: "hidden",
        }}
      >
        <CustomText text={title} variant="smallTitle" />
      </Box>
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

export const TitlePost: FC<TitleProps> = ({ slug, title }) => (
  <Link href={`/article/${slug}`}>
    <CustomText text={title} variant="smallTitle" />
  </Link>
);
