/** @jsxImportSource @emotion/react */
import { SectionType } from "@/assets/content";
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/react";

type props = {
  content: SectionType;
  styles?: SerializedStyles;
  index: number;
};
//TODO: add contact section
//TODO: add smooth scroll
const Chapter = ({ content, styles: propStyles, index }: props) => {
  return (
    <section
      css={[
        styles.section,
        propStyles,
        { background: index % 2 ? colors.blue_light : colors.yellow_light },
      ]}
      id={content.id}
    >
      <div css={styles.contentWrapper}>
        <div css={[styles.title, index % 2 === 0 && styles.orderLast]}>
          <h2>{content.title}</h2>
        </div>

        <div css={styles.text}>
          <p>
            {content.blocks.map((block, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: block }} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  contentWrapper: css({
    maxWidth: 1024,
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    padding: "2rem",
    gap: "2rem",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      padding: "4rem",
    },
  }),
  title: css({
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
  }),
  text: css({
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.7,
    textAlign: "center",
  }),
  orderLast: css({
    "@media (min-width: 768px)": {
      order: 2,
    },
  }),
};
export default Chapter;
