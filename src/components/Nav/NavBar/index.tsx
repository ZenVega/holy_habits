/** @jsxImportSource @emotion/react */
"use client";
import Link from "next/link";
import { navItems } from "../navItems";
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const NavBar = () => {
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);
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
    position: "sticky",
    top: 0,
    transition: "transform 0.3s ease",
    background: colors.blue,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
  }),
  visible: css({ transform: "translateY(0)" }),
  invisible: css({ transform: "translateY(-100%)" }),
  link: css({
    color: colors.text,
    fontWeight: 600,
  }),
};
export default NavBar;
