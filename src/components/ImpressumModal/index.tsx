/** @jsxImportSource @emotion/react */

import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import Link from "next/link";
import { ObfuscatedMail, ObfuscatedTel } from "../obfuscatedContacts";

const data = {
  fullName: "Ana Nuria Schmidt",
  address: ["Jahnstraße 2", "65558 Heistenbach"],
  mail: {
    user: "nuria",
    domain: "holyhabits.club",
  },
  tel: {
    cCode: "+49",
    predial: " 177",
    num: "730 40 74",
  },
};

type props = {
  closeModal: () => void;
};
const ImpressumModal = ({ closeModal }: props) => {
  return (
    <div css={styles.backdrop} onClick={closeModal}>
      <section css={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button css={styles.button} onClick={closeModal} aria-label="Close">
          &times;
        </button>
        <h2 css={{ fontWeight: 700, fontSize: 22 }}>Impressum</h2>
        <br />
        <p>{data.fullName}</p>
        <p>{data.address[0]}</p>
        <p>{data.address[1]}</p>
        <br />
        <p>
          email:
          <ObfuscatedMail />
        </p>
        <p css={styles.obfuscate}>
          tel:
          <ObfuscatedTel />
        </p>
      </section>
    </div>
  );
};

const styles = {
  backdrop: css({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2000,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  }),
  modal: css({
    background: colors.rosa_light,
    borderRadius: 16,
    padding: "2rem",
    maxWidth: 420,
    width: "100%",
    position: "relative",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  }),
  button: css({
    position: "absolute",
    top: 12,
    right: 16,
    background: "none",
    border: "none",
    fontSize: 24,
    cursor: "pointer",
    color: colors.text,
    lineHeight: 1,
    padding: 4,
    opacity: 0.6,
    transition: "opacity 0.2s ease",
    "&:hover": {
      opacity: 1,
    },
  }),
  obfuscate: css({
    unicodeBidi: "bidi-override",
  }),
};

export default ImpressumModal;
