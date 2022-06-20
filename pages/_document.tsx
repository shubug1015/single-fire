import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          {/* 캐노니컬 tag */}
          <link rel='canonical' href='https://xn--o22bp6a0zk.com/' />
          {/* opengraph image */}
          <meta
            property='og:image'
            content='https://www.xn--o22bp6a0zk.com/og-image.png'
          />
          {/* 네이버 SEO */}
          <meta
            name='naver-site-verification'
            content='36fd579c1e887428fa96c92606f33cc04e64076b'
          />
          {/* GA & GTM */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-4X9J001FZC'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-4X9J001FZC', {
                    page_path: window.location.pathname,
                  });
              `,
            }}
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
          {/* 네이버 로그인 */}
          <script src='https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js'></script>
          {/* 카카오 로그인 */}
          <script src='https://developers.kakao.com/sdk/js/kakao.min.js'></script>
          {/* 구글 로그인 */}
          <script
            src='https://accounts.google.com/gsi/client'
            async
            defer
          ></script>
          {/* jQuery */}
          <script
            type='text/javascript'
            src='https://code.jquery.com/jquery-1.12.4.min.js'
          ></script>
          {/* iamport.payment.js */}
          <script
            type='text/javascript'
            src='https://cdn.iamport.kr/js/iamport.payment-1.1.8.js'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
