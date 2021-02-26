import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="preload"
            href="/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf"
            as="font"
            type="font/woff"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf"
            as="font"
            type="font/woff"
            crossorigin="anonymous"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0QRWQ5EG14"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-0QRWQ5EG14');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"ed693dc20b27e90074954a3dc5d909cf"})});
            `,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}
