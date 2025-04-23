"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import { CustomText } from "./post-card";

const categories: string[] = [
  "World",
  "Politics",
  "Business",
  "Sports",
  "Entertainment",
];

export default function Navbar() {
  return (
    <AppBar position="static" className="bg-white text-black shadow-sm">
      <Toolbar className="container mx-auto">
        <Typography variant="h6" component="div" className="flex-grow">
          <Link href="/" className="text-white font-bold text-2xl">
            ActualNews
          </Link>
        </Typography>
        {categories.map((cat) => (
          <Button
            key={cat}
            color="inherit"
            variant="text"
            component={Link}
            href={`/${cat.toLowerCase()}`}
            style={{ textTransform: "none", backgroundColor: "transparent" }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
          >
            <CustomText text={cat} variant="navbarText" />
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
