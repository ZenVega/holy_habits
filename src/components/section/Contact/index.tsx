/** @jsxImportSource @emotion/react */
import { content } from "@/assets/content";
import { styles } from "..";
import { useState } from "react";
import ImpressumModal from "@/components/ImpressumModal";
import { ObfuscatedMail } from "@/components/obfuscatedContacts";

const contactData = content.contact;
const Contact: React.FC = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  return (
    <section css={styles.section}>
      <div css={styles.contentWrapper}>
        <h2 css={styles.heading}>Kontakt</h2>
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

export default Contact;
