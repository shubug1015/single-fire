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
    <Layout padding='pt-24 pb-48'>
      {data && (
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
            <div className='flex w-1/6 justify-center'>{data?.pay_method}</div>
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
