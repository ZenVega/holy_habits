/** @jsxImportSource @emotion/react */
import { content } from "@/assets/content";
import { styles } from "..";
import { useState } from "react";
import ImpressumModal from "@/components/ImpressumModal";
import { ObfuscatedMail } from "@/components/obfuscatedContacts";
import { css } from "@emotion/react";
import { colors } from "@/styles/colors";

const contactData = content.contact;
const Contact: React.FC = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  return (
    <section css={styles.section}>
      <div css={contactStyles.contentWrapper}>
        <h2 css={[styles.heading, { textAlign: "center" }]}>Kontakt</h2>
        <div css={[styles.text, { textAlign: "center", margin: "0 auto" }]}>
          <p>
            {contactData.blocks.map((block, i) => (
              <span key={i} dangerouslySetInnerHTML={{ __html: block }} />
            ))}
          </p>
          <br />
          <ObfuscatedMail />
          <p>www.holyhabits.club</p>
          <br />
          <button
            css={contactStyles.impressumButton}
            onClick={() => setShowImpressum(true)}
          >
            Impressum
          </button>
        </div>
      </div>
      {showImpressum && (
        <ImpressumModal closeModal={() => setShowImpressum(false)} />
      )}
    </section>
  );
};

const contactStyles = {
  contentWrapper: css({
    maxWidth: 1024,
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    padding: "0 1.5rem",
    gap: "2rem",
  }),
  impressumButton: css({
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
    color: colors.text,
    opacity: 0.6,
    textDecoration: "underline",
    textUnderlineOffset: 3,
    transition: "opacity 0.2s ease",
    padding: 0,
    "&:hover": {
      opacity: 1,
    },
  }),
};
export default Contact;
