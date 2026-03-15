/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "@/styles/colors";
import Logo from "@/assets/logo.svg";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Hero: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <section css={styles.section}>
      <Logo width={width < 500 ? 350 : 450} />
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
  }),
};
export default Hero;
