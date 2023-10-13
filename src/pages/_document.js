import { Html, Head, Main, NextScript } from "next/document";
//import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      {/*<script
        defer
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="66a968ad-70de-4703-81be-84844ed28395"
        data-blockingmode="auto"
        type="text/javascript"
        //property="lazyOnload"
      ></script>
      <script
        defer
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/66a968ad-70de-4703-81be-84844ed28395/cd.js"
        type="text/javascript"
        // property="lazyOnload"
  ></script>*/}
      {/*  <link
        rel="stylesheet preload prefetch"
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        as="style"
      ></link>
      <noscript>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        />
</noscript>*/}
      <script>
        {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}
        h._hjSettings={hjid:2628215,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      </script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
