/** @jsxImportSource @emotion/react */
"use client";
import Link from "next/link";
import { navItems } from "../navItems";
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const NavBar = () => {
  const scrollDirection = useScrollDirection();
  return (
    <div
      css={[
        styles.navbar,
        scrollDirection === "down" ? styles.invisible : styles.visible,
      ]}
    >
      {navItems.map((item) => (
        <Link css={styles.link} key={item.id} href={"#" + item.id}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const styles = {
  navbar: css({
    zIndex: 1000,
    position: "sticky",
    top: 0,
    transition: "transform 0.3s ease",
    background: colors.blue,
    height: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
  }),
  visible: css({ transform: "translateY(0)" }),
  invisible: css({ transform: "translateY(-100%)" }),
  link: css({
    color: colors.rosa_light,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    fontSize: 13,
    transition: "opacity 0.2s ease",
    "&:hover": {
      opacity: 0.75,
    },
  }),
};
export default NavBar;
