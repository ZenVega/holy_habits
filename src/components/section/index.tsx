/** @jsxImportSource @emotion/react */

import Image from "next/image";
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
        <div css={[styles.imageColumn, index % 2 && styles.orderLast]}>
          <h2 css={styles.heading}>{content.title}</h2>
          {content.image && (
            <div css={styles.imageWrapper}>
              <Image
                src={content.image.src}
                fill={true}
                alt={content.image.alt || ""}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
        <div css={styles.text}>
          <p>
            {content.blocks.map((block, i) => (
              <span key={i} dangerouslySetInnerHTML={{ __html: block }} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export const styles = {
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
    padding: "1rem",
    gap: "2rem",
    textAlign: "left",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      padding: "4rem",
      textAlign: "center",
    },
  }),
  imageColumn: css({
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    alignItems: "flex-start",
    "@media (min-width: 768px)": {
      alignItems: "center",
    },
  }),
  heading: css({
    fontWeight: 600,
    fontSize: 20,
    margin: 0,
    textAlign: "left",
    "@media (min-width: 768px)": {
      textAlign: "center",
    },
  }),
  imageWrapper: css({
    position: "relative",
    width: "100%",
    aspectRatio: "3 / 4",
    borderRadius: 8,
    overflow: "hidden",
  }),
  text: css({
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.7,
  }),
  orderLast: css({
    "@media (min-width: 768px)": {
      order: 2,
    },
  }),
};
export default Chapter;
