"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" className="bg-white text-black shadow-sm">
      <Toolbar className="container mx-auto">
        <Typography variant="h6" component="div" className="flex-grow">
          <Link href="/" className="text-white font-bold text-2xl">
            ActualNews
          </Link>
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/categories">
          Categories
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}
