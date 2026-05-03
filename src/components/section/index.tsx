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
    alignItems: "start",
    padding: "1rem",
    gap: "2rem",
    textAlign: "left",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      padding: "4rem",
    },
  }),
  contentWrapperNoImage: css({
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr",
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
    gridColumn: "1 / -1",
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
