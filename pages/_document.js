import Document, { Html, Head, Main, NextScript } from "next/document";
import { mediaStyles } from "utils/media";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <Partytown forward={['dataLayer.push']} /> */}

          <meta name="theme-color" content="#fff" />

          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
