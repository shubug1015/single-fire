import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
          {/* 카카오 로그인 */}
          <script src='https://developers.kakao.com/sdk/js/kakao.min.js'></script>
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
