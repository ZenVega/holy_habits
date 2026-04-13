/** @jsxImportSource @emotion/react */

import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import Link from "next/link";

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

export const ObfuscatedMail = () => {
  return (
    <Link
      css={styles.obfuscate}
      href={`mailto:${data.mail.user}@${data.mail.domain}`}
    >{` ${data.mail.user}@${data.mail.domain}`}</Link>
  );
};

export const ObfuscatedTel = () => {
  return (
    <span css={styles.obfuscate}>
      {` ${data.tel.cCode}${data.tel.predial} /  ${data.tel.num}`}
    </span>
  );
};
const styles = {
  obfuscate: css({
    unicodeBidi: "bidi-override",
  }),
};
