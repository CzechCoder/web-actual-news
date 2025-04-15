"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    largeTitle: React.CSSProperties;
    mediumTitle: React.CSSProperties;
    smallTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    largeTitle?: React.CSSProperties;
    mediumTitle?: React.CSSProperties;
    smallTitle?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    largeTitle: true;
    mediumTitle: true;
    smallTitle: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    largeTitle: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "38px",
    },
    mediumTitle: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "26px",
      letterSpacing: 0,
    },
    smallTitle: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
    },
  },
  palette: {
    primary: {
      main: "#ef4444",
    },
  },
});

export default theme;
