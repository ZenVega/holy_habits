/** @jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import { styles as chapterStyles } from "@/components/section";

const images = [
  { src: "/images/fotos/specials_1.PNG", alt: "special offer" },
  { src: "/images/fotos/specials_2.PNG", alt: "special offer" },
  { src: "/images/fotos/specials_3.PNG", alt: "special offer" },
];

const Specials = ({ index }: { index: number }) => {
  const [current, setCurrent] = useState(0);

  const go = (delta: number) =>
    setCurrent((prev) => (prev + delta + images.length) % images.length);

  const image = images[current];

  return (
    <section
      css={[
        chapterStyles.section,
        { background: index % 2 ? colors.blue_light : colors.yellow_light },
      ]}
      id="specials"
    >
      <div css={styles.wrapper}>
        <h2 css={chapterStyles.heading}>Specials</h2>
        <div css={styles.carousel}>
          <button
            type="button"
            css={[styles.chevron, styles.chevronLeft]}
            onClick={() => go(-1)}
            aria-label="Previous image"
          >
            <Chevron direction="left" />
          </button>
          <div css={styles.imageWrapper}>
            <Image
              src={image.src}
              fill={true}
              alt={image.alt}
              style={{ objectFit: "cover" }}
            />
          </div>
          <button
            type="button"
            css={[styles.chevron, styles.chevronRight]}
            onClick={() => go(1)}
            aria-label="Next image"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Chevron = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {direction === "left" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

const styles = {
  wrapper: css({
    width: "100%",
    maxWidth: 1024,
    padding: "0 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "@media (min-width: 768px)": {
      padding: "0 4rem",
      gap: "3rem",
    },
  }),
  carousel: css({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (min-width: 768px)": {
      gap: "1.5rem",
    },
  }),
  imageWrapper: css({
    position: "relative",
    width: "100%",
    aspectRatio: "3 / 4",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    "@media (min-width: 768px)": {
      maxWidth: 480,
    },
  }),
  chevron: css({
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    color: "#2a2a28",
    // On phones the chevrons overlay the full-width image with some
    // transparency so the photo stays visible underneath.
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    background: "rgba(255, 255, 255, 0.45)",
    backdropFilter: "blur(2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    transition: "background 0.2s ease",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.5)",
    },
    "@media (min-width: 768px)": {
      position: "static",
      transform: "none",
      background: "rgba(255, 255, 255, 0.5)",
      "&:hover": {
        background: "rgba(255, 255, 255, 1)",
      },
    },
  }),
  chevronLeft: css({
    left: "0.75rem",
  }),
  chevronRight: css({
    right: "0.75rem",
  }),
};

export default Specials;
