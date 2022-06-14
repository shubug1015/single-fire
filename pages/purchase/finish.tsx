import Layout from '@layouts/sectionLayout';
import { useUser } from '@libs/client/useUser';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Finish: NextPage = () => {
  useUser({ isPrivate: true });

  const router = useRouter();
  const { name, pay_method, price, discount, point, total_price } =
    router.query;
  return (
    <Layout padding='pt-24 pb-48'>
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
        <div className='flex w-1/6 justify-center'>{name}</div>
        <div className='flex w-1/6 justify-center'>{pay_method}</div>
        <div className='flex w-1/6 justify-center'>
          {price && (+price).toLocaleString()}
        </div>
        <div className='flex w-1/6 justify-center'>
          {discount && (+discount).toLocaleString()}
        </div>
        <div className='flex w-1/6 justify-center'>
          {point ? (+point).toLocaleString() : '-'}
        </div>
        <div className='flex w-1/6 justify-center'>
          {total_price && (+total_price).toLocaleString()}
        </div>
      </div>

      <div className='mt-6 hidden h-full space-y-2 border-b-2 border-t-2 border-[#4a4e57] py-8 text-lg font-medium text-[rgba(255,255,255,0.6)] md:block'>
        <div className='flex justify-start'>
          <div className='w-32'>상품명</div>
          <div className='w-48 text-white'>{name}</div>
        </div>
        <div className='flex justify-start'>
          <div className='w-32'>결제 방법</div>
          <div className='w-48 text-white'>{pay_method}</div>
        </div>
        <div className='flex justify-start'>
          <div className='w-32'>상품 금액</div>
          <div className='w-48 text-white'>
            {price && (+price).toLocaleString()}
          </div>
        </div>
        <div className='flex justify-start'>
          <div className='w-32'>할인 금액</div>
          <div className='w-48 text-white'>
            {discount && (+discount).toLocaleString()}
          </div>
        </div>
        <div className='flex justify-start'>
          <div className='w-32'>포인트 사용</div>
          <div className='w-48 text-white'>
            {point ? (+point).toLocaleString() : '-'}
          </div>
        </div>
        <div className='flex justify-start'>
          <div className='w-32'>총 결제 금액</div>
          <div className='w-48 text-white'>
            {total_price && (+total_price).toLocaleString()}
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
    </Layout>
  );
};

export default Finish;
