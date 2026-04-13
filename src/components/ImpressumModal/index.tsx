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
    <section css={styles.modal}>
      <button css={styles.button} onClick={closeModal}>
        X
      </button>
      <h2 css={{ fontWeight: 600 }}>Impressum</h2>
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
  );
};

const styles = {
  modal: css({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2000,
    width: "100vw",
    height: "100vh",
    background: colors.rosa_light,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  }),
  button: css({
    alignSelf: "flex-end",
    fontWeight: 600,
  }),
  obfuscate: css({
    unicodeBidi: "bidi-override",
  }),
};

export default ImpressumModal;
