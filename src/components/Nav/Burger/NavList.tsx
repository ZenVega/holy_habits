/** @jsxImportSource @emotion/react */
import { colors } from "@/styles/colors";
import { navItems } from "../navItems";
import { css } from "@emotion/react";
import Link from "next/link";

type props = {
  open: boolean;
  closeMenu: () => void;
};

const NavList = ({ open, closeMenu }: props) => {
  return (
    <ul css={[styles.container, open ? styles.visible : styles.hidden]}>
      {navItems.map((item) => (
        <li key={item.id} onClick={closeMenu}>
          <Link css={styles.link} key={item.id} href={"#" + item.id}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  container: css({
    zIndex: 1000,
    transition: "transform 0.3s ease",
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: colors.rosa,
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 0",
    gap: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: "0 -4px 24px rgba(0, 0, 0, 0.1)",
  }),
  visible: css({
    transform: "translateY(0)",
  }),
  hidden: css({
    transform: "translateY(100%)",
  }),
  link: css({
    color: colors.text,
    fontSize: 18,
    letterSpacing: "0.02em",
    padding: "4px 0",
  }),
};
export default NavList;
