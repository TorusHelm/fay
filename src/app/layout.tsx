import type { Metadata } from "next";
import React from "react";
import Navigation from "@/components/Navigation";
import {ThemeProvider} from "@mui/system";
import {theme} from "@/utils/theme";
import "./global.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "Fay Crafts",
  description: "Workshop of Fay Crafts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
