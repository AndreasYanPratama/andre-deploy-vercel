import Document, {
    Html, Head, Main, NextScript,
  } from 'next/document';
  
export async function getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
}
  
export default function MyDocument() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Web site created using create-react-app" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          {/* <div>Dari Document</div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
  