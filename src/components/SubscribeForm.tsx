/** @jsxImportSource @emotion/react */
import { colors } from "@/styles/colors";
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
// At the top of your file, or in a global.d.ts
declare global {
  interface Window {
    FlodeskObject: string;
    fd: any;
  }
}
const SubscribeForm = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    // Load Flodesk SDK
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

    // Init form once SDK is ready
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
  }, []);

  useEffect(() => {
    if (window.fd && containerRef.current) {
      window.fd("form", {
        formId: "69e3d37cbe4418c35b21bfcc",
        containerEl: containerRef.current,
      });
    }
  }, []);

  return (
    <div css={{ width: "100vw", background: colors.pink }}>
      <div ref={containerRef} />
    </div>
  );
};

export default SubscribeForm;
