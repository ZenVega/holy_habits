/** @jsxImportSource @emotion/react */
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    FlodeskObject: string;
    fd: any;
  }
}

const COOKIE_KEY = "flodesk-consent";

const SubscribeForm = () => {
  const containerRef = useRef(null);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(COOKIE_KEY) === "true") {
      setAccepted(true);
    }
  }, []);

  useEffect(() => {
    if (!accepted) return;

    const v = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
    const base = "https://assets.flodesk.com";

    window.FlodeskObject = "fd";
    window.fd =
      window.fd ||
      function () {
        (window.fd.q = window.fd.q || []).push(arguments);
      };

    const sm = document.createElement("script");
    sm.async = true;
    sm.type = "module";
    sm.src = base + "/universal.mjs" + v;
    document.head.appendChild(sm);

    const sn = document.createElement("script");
    sn.async = true;
    sn.noModule = true;
    sn.src = base + "/universal.js" + v;
    document.head.appendChild(sn);

    const interval = setInterval(() => {
      if (window.fd && containerRef.current) {
        window.fd("form", {
          formId: "69e3d37cbe4418c35b21bfcc",
          containerEl: containerRef.current,
        });
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      document.head.removeChild(sm);
      document.head.removeChild(sn);
    };
  }, [accepted]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setAccepted(true);
  };

  if (!accepted) {
    return (
      <div css={styles.consentWrapper}>
        <div css={styles.consentContent}>
          <h2 css={styles.heading}>Abonniere meinen Newsletter</h2>
          <p css={styles.consentText}>
            Um das Newsletter-Formular anzuzeigen, werden externe Inhalte von
            Flodesk geladen. Dabei können Cookies gesetzt werden.
          </p>
          <button css={styles.consentButton} onClick={handleAccept}>
            Akzeptieren & Formular laden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div css={{ width: "100vw", background: colors.pink }}>
      <div ref={containerRef} />
    </div>
  );
};

const styles = {
  consentWrapper: css({
    width: "100vw",
    background: colors.pink,
    display: "flex",
    justifyContent: "center",
    padding: "3rem 1.5rem",
  }),
  consentContent: css({
    maxWidth: 480,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    textAlign: "center",
  }),
  heading: css({
    fontWeight: 700,
    fontSize: 24,
    margin: 0,
    letterSpacing: "0.02em",
    color: colors.text,
    "@media (min-width: 768px)": {
      fontSize: 28,
    },
  }),
  consentText: css({
    fontSize: 15,
    lineHeight: 1.6,
    color: colors.text,
  }),
  consentButton: css({
    background: colors.text,
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "12px 28px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.2s ease",
    "&:hover": {
      opacity: 0.85,
    },
  }),
};

export default SubscribeForm;
