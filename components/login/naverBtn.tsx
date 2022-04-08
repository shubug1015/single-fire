export default function NaverBtn() {
  const APP_KEY = 'a78245cc3114147dd84f65c96e04e5c3';

  const kakaoLogin = () => {
    const { Kakao } = window;

    if (!Kakao.isInitialized()) {
      Kakao.init(APP_KEY);
    }

    Kakao.Auth.login({
      success: function () {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (res: any) {
            console.log(res);
          },
          fail: function (e: any) {
            console.log(e);
          },
        });
      },
      fail: (e: any) => {
        console.log(e);
      },
    });
  };

  return (
    <div
      onClick={kakaoLogin}
      className='flex cursor-pointer justify-center rounded bg-[#fee500] py-4 text-lg font-medium text-[#222222] transition-all hover:opacity-90'
    >
      kakao 로그인
    </div>
  );
}
