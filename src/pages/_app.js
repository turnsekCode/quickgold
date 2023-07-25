import "@/styles/globals.css";
import TagManager from "react-gtm-module";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM || "";
  const tagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}
