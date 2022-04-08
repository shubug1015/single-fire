import SEO from '@components/seo';
import type { NextPage } from 'next';

declare global {
  interface Window {
    IMP: any;
  }
}

const Iamport: NextPage = () => {
  const handlePayment = () => {
    const { IMP } = window;
    IMP.init('imp24747186');

    const params = {
      pg: 'html5_inicis', // pg사
      pay_method: 'card', // 결제수단
      merchant_uid: '123', // 주문번호
      name: '부동산 강의', // 상품명
      amount: 1, // 금액
      buyer_email: 'shubug@naver.com', // 이메일
      buyer_name: '이동현', // 이름
      buyer_tel: '010-8594-1267', // 전화번호
      buyer_addr: '서울특별시 은평구 진관동', // 주소
      buyer_postcode: '03304', // 우편번호
    };

    const callback = (res: any) => {
      const { success, merchant_uid, error_msg, imp_uid, error_code } = res;
      if (success) {
        console.log(res);
      } else {
        console.log('error');
      }
    };

    IMP.request_pay(params, callback);
  };

  return (
    <>
      <SEO title='아임포트' />
      <div className='flex justify-center py-20'>
        <div
          onClick={handlePayment}
          className='flex h-16 w-48 cursor-pointer items-center justify-center rounded bg-slate-500'
        >
          결제
        </div>
      </div>
    </>
  );
};

export default Iamport;
