/** @jsxImportSource @emotion/react */
import { colors } from "@/styles/colors";
import { navItems } from "../navItems";
import { css } from "@emotion/react";
import Link from "next/link";

type props = {
  open: boolean;
  closeMenu: () => void;
};

const NavList = ({ open }: props) => {
  return (
    <ul css={[styles.container, open ? styles.visible : styles.hidden]}>
      {navItems.map((item) => (
        <li>
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
    transition: "transform 0.3s ease",
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: colors.rosa,
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 0",
    gap: 16,
  }),
  visible: css({
    transform: "translateY(0)",
  }),
  hidden: css({
    transform: "translateY(100%)",
  }),
  link: css({
    color: colors.text,
  }),
};
export default NavList;
