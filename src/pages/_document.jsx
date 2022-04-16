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
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />  */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
        </Head>
        <body>
          {/* <div>Dari Document</div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
  