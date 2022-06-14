import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { communityApi, lecturesApi, purchaseApi } from '@libs/api';
import { cls } from '@libs/client/utils';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { useUser } from '@libs/client/useUser';

declare global {
  interface Window {
    IMP: any;
  }
}

interface IProps {
  slug: string[];
}

const Purchase: NextPage<IProps> = ({ slug }) => {
  const { token, profile } = useUser({
    isPrivate: true,
  });
  const [type, id] = slug;
  const { data: tmpData } = useSWR(
    type === 'lecture' ? `/lectures/${id}` : '/community',
    type === 'lecture'
      ? () => lecturesApi.detail(id)
      : () => communityApi.communityList()
  );
  const data = tmpData && (type === 'lecture' ? tmpData : tmpData[+id - 1]);
  const router = useRouter();

  const [payMethod, setPayMethod] = useState<string | null>('uplus');
  const [couponPopup, setCouponPopup] = useState(false);
  const [coupon, setCoupon] = useState({
    id: null,
    name: '-',
    price: 0,
  });
  const [point, setPoint] = useState<string | number>('');
  const date = new Date();
  const orderId = `MID${date.getFullYear()}${(
    date.getMonth() +
    1 +
    ''
  ).padStart(2, '0')}${(date.getDate() + '').padStart(
    2,
    '0'
  )}-${date.getTime()}`;
  const totalDiscount = data?.discount + +point + coupon.price;
  const totalPrice =
    data?.price - totalDiscount < 0 ? 0 : data?.price - totalDiscount;

  const handlePayMethod = (method: string) => {
    setPayMethod(method);
  };
  const handlePoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (+value > profile?.point) {
      setPoint(profile?.point);
    } else {
      setPoint(+value);
    }
  };

  const handlePayment = () => {
    const { IMP } = window;
    IMP.init('imp24747186');
    // IMP.init(process.env.NEXT_PUBLIC_MERCHANT_ID);

    const params = {
      pg: payMethod, // pg사
      merchant_uid: orderId, // 주문번호
      name: data?.name, // 상품명
      amount: totalPrice, // 금액
      buyer_email: profile?.email, // 이메일
      buyer_name: profile?.name, // 이름
      buyer_tel: profile?.phone_number.replace(
        /^(\d{2,3})(\d{3,4})(\d{4})$/,
        `$1-$2-$3`
      ), // 전화번호
      m_redirect_url: `https://www.xn--o22bp6a0zk.com/purchase/mobile?type=${type}&id=${data?.id}&name=${data?.name}&pay_method=${payMethod}&price=${data?.price}&discount=${totalDiscount}&point=${point}&coupon=${coupon.id}&total_price=${totalPrice}&order_id=${orderId}`, // 모바일 redirect url
    };

    const callback = async (res: any) => {
      const { success, merchant_uid, error_msg, imp_uid, error_code } = res;
      if (success) {
        await purchaseApi.purchase({
          type,
          method: payMethod,
          id: data?.id,
          price: data?.price,
          totalPrice,
          point,
          coupon: coupon.id,
          orderId,
          token,
        });

        router.push({
          pathname: '/purchase/finish',
          query: {
            name: res.name,
            pay_method: payMethod,
            price: data?.price,
            discount: totalDiscount,
            point,
            total_price: totalPrice,
          },
        });
      } else {
        console.log('error', error_code, error_msg);
      }
    };

    IMP.request_pay(params, callback);
  };

  const popupVar = {
    invisible: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <SEO title='결제' />

      <Layout padding='py-24 md:py-4'>
        <div className='mb-14 text-2xl font-bold md:mb-4 md:text-center md:text-lg md:font-medium'>
          주문 결제
        </div>

        <div className='divide-y-2 divide-[#4a4e57] md:divide-[#282e38] md:bg-[#4a4e57] md:p-4'>
          <div>
            <div className='text-lg font-medium'>주문상품</div>

            {/* 상품정보 헤더 */}
            <div className='mt-6 flex h-[3.75rem] items-center rounded-sm bg-[rgba(229,229,229,0.08)] text-lg font-medium text-[rgba(255,255,255,0.6)] md:hidden'>
              <div className='flex w-1/5 justify-center'>상품정보</div>
              <div className='flex grow'>상품명</div>
              <div className='flex w-1/5 justify-center'>옵션</div>
              <div className='flex w-1/5 justify-center'>상품금액</div>
            </div>
            {/* 상품정보 헤더 */}

            {/* 상품정보 Data */}
            <div className='flex items-center py-8 text-lg md:hidden'>
              <div className='flex w-1/5 justify-center'>
                <div className='relative h-32 w-36'>
                  {data && (
                    <Image
                      src={data?.thumbnail}
                      alt='Lecture Thumbnail'
                      layout='fill'
                      objectFit='cover'
                      className='rounded'
                    />
                  )}
                </div>
              </div>
              <div className='flex grow'>{data?.name}</div>
              <div className='flex w-1/5 justify-center'>-</div>
              <div className='flex w-1/5 justify-center'>
                {data?.price?.toLocaleString()} 원
              </div>
            </div>
            {/* 상품정보 Data */}

            {/* 상품정보 Data 모바일*/}
            <div className='hidden py-8 text-lg md:block'>
              <div className='flex grow text-base'>{data?.name}</div>
              <div className='mt-4 flex justify-between'>
                <div className='text-sm text-[#cfcfcf]'>옵션</div>
                <div className=''>-</div>
              </div>
              <div className='mt-1 flex justify-between'>
                <div className='text-sm text-[#cfcfcf]'>상품금액</div>
                <div className='text-sm'>
                  {data?.price?.toLocaleString()} 원
                </div>
              </div>
            </div>
            {/* 상품정보 Data 모바일*/}
          </div>

          <div className='pt-14 pb-6 text-lg font-medium md:hidden'>
            할인 혜택
          </div>
          <div className='flex items-start pt-6 pb-8 md:block'>
            <div className='mr-12 pt-1.5 text-lg'>적용 가능한 쿠폰</div>

            <div className='grow'>
              <div className='flex items-center space-x-4 border-b-2 border-[#4a4e57] pb-6 md:mt-4'>
                <div className='text-lg'>
                  <span className='font-bold'>{profile?.coupon.length}</span>장
                </div>

                <div
                  onClick={() => setCouponPopup(true)}
                  className='cursor-pointer rounded bg-[#4a4e57] py-2 px-4 md:bg-[#676a72]'
                >
                  쿠폰적용
                </div>
              </div>

              <div className='pt-8 md:hidden'>
                <div className='text-lg text-[#00e7ff]'>{coupon.name}</div>

                <div className='mt-4 text-lg'>
                  <span className='font-bold'>
                    {coupon.price?.toLocaleString()}
                  </span>
                  원 할인
                </div>
              </div>
              {/* 모바일 */}
              <div className='hidden pt-8 md:block md:pt-0'>
                <div className='flex justify-between'>
                  <div className='text-[#cfcfcf]'>쿠폰번호</div>
                  <div className='text-lg text-[#00e7ff]'>{coupon.name}</div>
                </div>
                <div className='flex justify-between'>
                  <div className='text-[#cfcfcf]'>할인금액</div>
                  <div>
                    <span className='font-bold'>
                      {coupon.price?.toLocaleString()}
                    </span>{' '}
                    원
                  </div>
                </div>
              </div>
              {/* 모바일 */}
            </div>
          </div>

          <div className='flex items-start py-8 md:block'>
            <div className='mr-12 text-lg'>적용 가능한 포인트</div>

            <div className='space-y-6 md:mt-4'>
              <div className='text-lg md:text-base'>
                총 <span className='font-bold'>{profile?.point}P</span> 보유
              </div>

              <div className='flex'>
                <input
                  type='tel'
                  placeholder='사용 포인트 입력'
                  value={point}
                  onChange={(e) => handlePoint(e)}
                  className='h-10 w-36 rounded-l bg-[rgba(0,0,0,0.25)] pl-4 text-sm outline-none md:w-48'
                />

                <div
                  onClick={() => setPoint(profile?.point)}
                  className='-ml-0.5 flex h-10 w-24 cursor-pointer items-center justify-center rounded bg-[#4a4e57] md:bg-[#676a72] md:text-sm'
                >
                  전액사용
                </div>
              </div>
            </div>
          </div>
          <div className='pt-14 pb-6 text-lg font-medium'>결제 수단 선택</div>
          <div className='flex space-x-8 py-8 text-lg md:block md:space-y-4 md:space-x-0 md:text-base'>
            {/* <div className='flex items-center space-x-3'>
              <div
                onClick={() => handlePayMethod('kakaopay')}
                className={cls(
                  payMethod === 'kakaopay'
                    ? 'border-[#00e7ff]'
                    : 'border-[rgba(255,255,255,0.6)]',
                  'flex aspect-square w-4 items-center justify-center rounded-full border'
                )}
              >
                <div
                  className={cls(
                    payMethod === 'kakaopay' ? 'bg-[#00e7ff]' : '',
                    'flex aspect-square w-2 cursor-pointer items-center justify-center rounded-full transition-all'
                  )}
                />
              </div>
              <div>카카오페이</div>
            </div> */}

            {/* <div className='flex items-center space-x-3'>
              <div
                onClick={() => handlePayMethod('naverpay')}
                className={cls(
                  payMethod === 'naverpay'
                    ? 'border-[#00e7ff]'
                    : 'border-[rgba(255,255,255,0.6)]',
                  'flex aspect-square w-4 items-center justify-center rounded-full border'
                )}
              >
                <div
                  className={cls(
                    payMethod === 'naverpay' ? 'bg-[#00e7ff]' : '',
                    'flex aspect-square w-2 cursor-pointer items-center justify-center rounded-full transition-all'
                  )}
                />
              </div>
              <div>네이버페이</div>
            </div> */}

            <div className='flex items-center space-x-3'>
              <div
                onClick={() => handlePayMethod('uplus')}
                className={cls(
                  payMethod === 'uplus'
                    ? 'border-[#00e7ff]'
                    : 'border-[rgba(255,255,255,0.6)]',
                  'flex aspect-square w-4 items-center justify-center rounded-full border'
                )}
              >
                <div
                  className={cls(
                    payMethod === 'uplus' ? 'bg-[#00e7ff]' : '',
                    'flex aspect-square w-2 cursor-pointer items-center justify-center rounded-full transition-all'
                  )}
                />
              </div>
              <div>신용카드</div>
            </div>

            {/* <div className='flex items-center space-x-3'>
              <div
                onClick={() => handlePayMethod('danal')}
                className={cls(
                  payMethod === 'danal'
                    ? 'border-[#00e7ff]'
                    : 'border-[rgba(255,255,255,0.6)]',
                  'flex aspect-square w-4 items-center justify-center rounded-full border'
                )}
              >
                <div
                  className={cls(
                    payMethod === 'danal' ? 'bg-[#00e7ff]' : '',
                    'flex aspect-square w-2 cursor-pointer items-center justify-center rounded-full transition-all'
                  )}
                />
              </div>
              <div>휴대폰결제</div>
            </div> */}
          </div>
          <div className='pt-14 pb-6 text-lg font-medium'>결제 금액</div>
          <div className='space-y-4 py-8 text-lg'>
            <div className='flex items-center'>
              <div className='w-40'>상품 금액</div>
              <div>{data?.price?.toLocaleString()}</div>
            </div>

            <div className='flex items-center'>
              <div className='w-40'>할인 금액</div>
              <div>-{totalDiscount?.toLocaleString()}</div>
            </div>

            <div className='flex items-center opacity-60'>
              <div className='w-40'>이벤트</div>
              <div>-{data?.discount?.toLocaleString()}</div>
            </div>

            <div className='flex items-center opacity-60'>
              <div className='w-40'>쿠폰</div>
              <div>-{coupon.price?.toLocaleString()}</div>
            </div>

            <div className='flex items-center opacity-60'>
              <div className='w-40'>포인트</div>
              <div>-{point === '' ? '0' : point}</div>
            </div>
          </div>
          <div className='flex items-start pt-4'>
            <div className='w-40 text-lg'>총 결제 예상금액</div>

            <div className='flex text-lg'>
              <span className='font-bold'>{totalPrice?.toLocaleString()}</span>
              원
            </div>
          </div>
        </div>

        <div className='mt-20 flex justify-center md:mt-4'>
          <div
            onClick={handlePayment}
            className='flex h-14 w-64 cursor-pointer items-center justify-center rounded bg-[#00e7ff] font-medium text-[#282e38] transition-all hover:opacity-90'
          >
            결제하기
          </div>
        </div>
      </Layout>

      {couponPopup ? (
        <div
          onClick={() => setCouponPopup(false)}
          className='fixed top-[150px] left-0 z-50 flex h-[calc(100vh-150px)] w-screen items-center justify-center bg-[rgba(0,0,0,0.6)]'
        >
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              return;
            }}
            variants={popupVar}
            initial='invisible'
            animate='visible'
            exit='exit'
            className='w-[30rem] rounded bg-[#282e38] py-8 px-4'
          >
            <div className='flex h-[3.75rem] items-center rounded-sm bg-[#4a4e57]'>
              <div className='flex w-3/4 pl-4'>쿠폰명</div>
              <div className='flex grow justify-center'>할인금액</div>
            </div>

            <div className='max-h-96 overflow-y-scroll'>
              {profile?.coupon.map((i: any) => (
                <div
                  key={i.id}
                  onClick={() => {
                    setCoupon(i);
                    setCouponPopup(false);
                  }}
                  className='flex h-[3.75rem] cursor-pointer items-center rounded-sm transition-all hover:opacity-70'
                >
                  <div className='flex w-3/4 pl-4'>{i.name}</div>
                  <div className='flex grow justify-center'>
                    {i.price?.toLocaleString()}원
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      slug: ctx.params?.slug,
    },
  };
};

export default Purchase;
