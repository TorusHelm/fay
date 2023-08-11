"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";

interface NavigationItem {
  href: string;
  title: string;
}

// use NavigationItem[] instead of Array<NavigationItem>
const navigation: Array<NavigationItem> = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <Container>
      <Tabs value={pathname} centered>
        {navigation.map(({ href, title }) => {
          return (
              <Tab
                  label={title}
                  value={href}
                  href={href}
                  component={Link}
                  key={href}
              />
          );
        })}
      </Tabs>
    </Container>
  );
}
