/** @jsxImportSource @emotion/react */

import Image from "next/image";
import { SectionId, SectionType } from "@/assets/content";
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/react";

type props = {
  content: SectionType;
  styles?: SerializedStyles;
  index: number;
  key: SectionId;
};

const Chapter = ({ content, styles: propStyles, index }: props) => {
  const hasImage = !!content.image;
  return (
    <section
      css={[
        styles.section,
        propStyles,
        { background: index % 2 ? colors.blue_light : colors.yellow_light },
      ]}
      id={content.id}
    >
      <div
        css={[
          styles.contentWrapper,
          !hasImage && styles.contentWrapperNoImage,
        ]}
      >
        <h2 css={styles.heading}>{content.title}</h2>
        {hasImage && (
          <div css={[styles.imageColumn, index % 2 && styles.orderLast]}>
            <div css={styles.imageWrapper}>
              <Image
                src={content.image!.src}
                fill={true}
                alt={content.image!.alt || ""}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        )}
        <div css={styles.text}>
          {content.blocks.map((block, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: block }} />
          ))}
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
    padding: "3rem 0",
    "@media (min-width: 768px)": {
      padding: "4rem 0",
    },
  }),
  contentWrapper: css({
    maxWidth: 1024,
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "start",
    padding: "0 1.5rem",
    gap: "2rem",
    textAlign: "left",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      padding: "0 4rem",
      gap: "3rem",
    },
  }),
  contentWrapperNoImage: css({
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr",
      maxWidth: 680,
      margin: "0 auto",
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
    fontWeight: 700,
    fontSize: 24,
    margin: 0,
    textAlign: "left",
    gridColumn: "1 / -1",
    letterSpacing: "0.02em",
    "@media (min-width: 768px)": {
      textAlign: "center",
      fontSize: 28,
    },
  }),
  imageWrapper: css({
    position: "relative",
    width: "100%",
    aspectRatio: "3 / 4",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  }),
  text: css({
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.8,
    fontSize: 16,
    color: "#2a2a28",
  }),
  orderLast: css({
    "@media (min-width: 768px)": {
      order: 2,
    },
  }),
};
export default Chapter;
