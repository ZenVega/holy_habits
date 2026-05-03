/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "@/styles/colors";
import Logo from "@/assets/logo.svg";

const Hero: React.FC = () => {
  return (
    <section css={styles.section}>
      <div css={styles.logoWrapper}>
        <Logo css={styles.logo} />
      </div>
    </section>
  );
};

const styles = {
  section: css({
    height: "100vh",
    backgroundColor: colors.blue_light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  }),
  logoWrapper: css({
    width: "100%",
    maxWidth: 350,
    "@media (min-width: 500px)": {
      maxWidth: 450,
    },
  }),
  logo: css({
    width: "100%",
    height: "auto",
  }),
};
export default Hero;
