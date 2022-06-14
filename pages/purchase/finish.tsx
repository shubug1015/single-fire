import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { purchaseApi } from '@libs/api';
import { useUser } from '@libs/client/useUser';
import axios from 'axios';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IProps {
  imp_uid: string;
  merchant_uid: string;
  imp_success: string;
}

const Finish: NextPage<IProps> = ({ imp_uid, merchant_uid, imp_success }) => {
  const { token } = useUser({ isPrivate: true });
  const [data, setData] = useState<{ [key: string]: any } | null>(null);
  const router = useRouter();

  const getData = async () => {
    try {
      const { data } = await axios.post('/api/payment', {
        imp_uid,
        merchant_uid,
        imp_success,
      });
      const customData = JSON.parse(data.custom_data);
      const {
        type,
        id,
        price,
        total_price,
        point,
        coupon,
        token: prevToken,
      } = customData;
      if (imp_success === 'true' && token === prevToken) {
        await purchaseApi.purchase({
          type,
          method: data.pay_method,
          id,
          price,
          totalPrice: total_price,
          point,
          coupon,
          orderId: data.merchant_uid,
          token,
        });
        setData({ ...data, custom_data: customData });
      } else {
        // alert('결제가 취소되었습니다.');
        router.replace(`/purchase/${type}/${id}`);
      }
    } catch {
      alert('Error');
      router.replace('/');
    }
  };

  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);
  return (
    <>
      <SEO title='결제완료' />
      <Layout padding='pt-24 pb-48'>
        {!data ? (
          <div className='flex items-center justify-center pt-40 pb-16'>
            <svg
              role='status'
              className='h-7 w-7 animate-spin fill-[#373c46] text-[#02cce2] md:h-6 md:w-6'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
          </div>
        ) : (
          <>
            <div className='flex justify-center text-[2.5rem] font-bold md:text-3xl'>
              결제가 완료되었습니다.
            </div>

            <div className='mt-4 flex justify-center font-light md:block'>
              결제 영수증은 마이페이지 ▷ 수강 신청 내역 ▷{' '}
              <span className='text-[#ff8a00]'>결제발급서</span>에서 확인이
              가능합니다.
            </div>

            <div className='mt-14 text-lg font-medium'>결제 상품 정보</div>

            <div className='mt-6 flex h-[3.75rem] items-center rounded-sm bg-[rgba(229,229,229,0.08)] text-lg font-medium text-[rgba(255,255,255,0.6)] md:hidden'>
              <div className='flex w-1/6 justify-center'>상품명</div>
              <div className='flex w-1/6 justify-center'>결제 방법</div>
              <div className='flex w-1/6 justify-center'>상품 금액</div>
              <div className='flex w-1/6 justify-center'>할인 금액</div>
              <div className='flex w-1/6 justify-center'>포인트 사용</div>
              <div className='flex w-1/6 justify-center'>총 결제 금액</div>
            </div>

            <div className='flex items-center border-b-2 border-[#4a4e57] py-14 text-lg md:hidden'>
              <div className='flex w-1/6 justify-center'>{data?.name}</div>
              <div className='flex w-1/6 justify-center'>
                {data?.pay_method}
              </div>
              <div className='flex w-1/6 justify-center'>
                {data?.custom_data?.price?.toLocaleString()}
              </div>
              <div className='flex w-1/6 justify-center'>
                {(
                  data?.custom_data?.price - data?.custom_data?.total_price
                )?.toLocaleString()}
              </div>
              <div className='flex w-1/6 justify-center'>
                {data?.custom_data?.point
                  ? (+data?.custom_data?.point).toLocaleString()
                  : '-'}
              </div>
              <div className='flex w-1/6 justify-center'>
                {data?.custom_data?.total_price?.toLocaleString()}
              </div>
            </div>

            <div className='mt-6 hidden h-full space-y-2 border-b-2 border-t-2 border-[#4a4e57] py-8 text-lg font-medium text-[rgba(255,255,255,0.6)] md:block'>
              <div className='flex justify-start'>
                <div className='w-32'>상품명</div>
                <div className='w-48 text-white'>{data?.name}</div>
              </div>
              <div className='flex justify-start'>
                <div className='w-32'>결제 방법</div>
                <div className='w-48 text-white'>{data?.pay_method}</div>
              </div>
              <div className='flex justify-start'>
                <div className='w-32'>상품 금액</div>
                <div className='w-48 text-white'>
                  {data?.custom_data?.price?.toLocaleString()}
                </div>
              </div>
              <div className='flex justify-start'>
                <div className='w-32'>할인 금액</div>
                <div className='w-48 text-white'>
                  {(
                    data?.custom_data?.price - data?.custom_data?.total_price
                  )?.toLocaleString()}
                </div>
              </div>
              <div className='flex justify-start'>
                <div className='w-32'>포인트 사용</div>
                <div className='w-48 text-white'>
                  {data?.custom_data?.point
                    ? (+data?.custom_data?.point).toLocaleString()
                    : '-'}
                </div>
              </div>
              <div className='flex justify-start'>
                <div className='w-32'>총 결제 금액</div>
                <div className='w-48 text-white'>
                  {data?.custom_data?.total_price?.toLocaleString()}
                </div>
              </div>
            </div>

            <div className='mt-20 flex justify-center'>
              <Link href='/mypage/lecture/ongoing/1'>
                <a>
                  <div className='flex h-14 w-64 items-center justify-center rounded bg-[#00e7ff] font-medium text-[#282e38] transition-all hover:opacity-90'>
                    강의 보러가기
                  </div>
                </a>
              </Link>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      imp_uid: ctx.query?.imp_uid,
      merchant_uid: ctx.query?.merchant_uid,
      imp_success: ctx.query?.imp_success,
    },
  };
};

export default Finish;
