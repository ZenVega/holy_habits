/** @jsxImportSource @emotion/react */
import { content } from "@/assets/content";
import { styles } from "..";
import { useState } from "react";
import ImpressumModal from "@/components/ImpressumModal";
import { ObfuscatedMail } from "@/components/obfuscatedContacts";
import { css } from "@emotion/react";

const contactData = content.contact;
const Contact: React.FC = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  return (
    <section css={styles.section}>
      <div css={contentWrapper}>
        <h2 css={[styles.heading, { textAlign: "center" }]}>Kontakt</h2>
        <div css={styles.text}>
          <p>
            {contactData.blocks.map((block, i) => (
              <span key={i} dangerouslySetInnerHTML={{ __html: block }} />
            ))}
          </p>
          <br />
          <ObfuscatedMail />
          <p>www.holyhabits.club</p>
          <br />
          <button onClick={() => setShowImpressum(true)}>Impressum</button>
        </div>
      </div>
      {showImpressum && (
        <ImpressumModal closeModal={() => setShowImpressum(false)} />
      )}
    </section>
  );
};

const contentWrapper = css({
  maxWidth: 1024,
  textAlign: "center",
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  padding: "1rem",
  gap: "2rem",
});
export default Contact;
