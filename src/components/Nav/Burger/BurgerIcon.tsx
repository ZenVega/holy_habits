/** @jsxImportSource @emotion/react */
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";

type props = {
  open: boolean;
  toggleMenu: () => void;
};

const BurgerIcon = ({ open, toggleMenu }: props) => {
  return (
    <div
      onClick={toggleMenu}
      css={[styles.container, open ? styles.rotate : styles.rotateZero]}
    >
      <div css={styles.bar} />
      <div css={styles.bar} />
      <div css={styles.bar} />
    </div>
  );
};

const styles = {
  container: css({
    zIndex: 1000,
    position: "fixed",
    top: 16,
    right: 16,
    borderRadius: "50%",
    background: colors.rosa,
    width: 56,
    aspectRatio: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 6,
    transition: "transform 0.3s ease",
  }),
  rotate: css({ transform: "rotate(90deg)" }),
  rotateZero: css({ transform: "rotate(0deg)" }),
  bar: css({
    width: 30,
    height: 4,
    borderRadius: 2,
    background: colors.blue,
  }),
};
export default BurgerIcon;
