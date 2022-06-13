import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: number;
  image: string;
  category: string;
  name: string;
  text: string;
  price: number;
  discount: number;
  discount_period: string;
}

export default function Detail({
  id,
  image,
  category,
  name,
  text,
  price,
  discount,
  discount_period,
}: IProps) {
  const copyUrl = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => alert('링크가 복사되었습니다.'));
  };
  return (
    <Layout padding='pt-24 md:pt-6'>
      <div className='flex justify-between md:block'>
        {/* 썸네일 */}
        <div className='relative h-[30.625rem] w-[43.75rem] md:h-[16.25rem] md:w-full'>
          {image && (
            <Image
              src={image}
              alt='Detail Thumbnail'
              layout='fill'
              objectFit='cover'
              className='rounded-md'
            />
          )}
        </div>
        {/* 썸네일 */}

        {/* 강의 상세정보 */}
        <div className='flex h-[30.625rem] w-[26.75rem] flex-col justify-between md:w-full'>
          {/* 카테고리 */}
          <div className='text-sm font-medium md:mt-6'>{category}</div>
          {/* 카테고리 */}

          {/* 강의명 */}
          <div className='mt-[0.625rem] text-[1.75rem] font-medium md:mt-2 md:mb-6 md:text-xl'>
            {name}
          </div>
          {/* 강의명 */}

          {/* 간략 설명 */}
          <div className='whitespace-pre-wrap border-y-2 border-[#464c59] py-6 text-[#cfcfcf] md:py-4 md:text-sm'>
            {text}
          </div>
          {/* 간략 설명 */}

          {/* 가격 */}
          <div className='mt-6 flex h-20 w-full flex-col justify-center rounded bg-[rgba(0,184,204,0.4)] px-4'>
            <div className='flex justify-end text-sm font-medium text-[#cfcfcf] md:text-xs'>
              6개월 할부시
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex text-xl text-[#cfcfcf] md:text-sm'>
                {/* 정상가 */}
                <div
                  className={cls(
                    discount > 0 ? 'line-through' : '',
                    'mr-[0.375rem]'
                  )}
                >
                  {price?.toLocaleString()}원
                </div>
                {/* 정상가 */}

                {/* 할인가 */}
                {discount > 0 && (
                  <div>{(price - discount).toLocaleString()}원</div>
                )}
                {/* 할인가 */}
              </div>

              <div className='flex text-2xl md:text-lg'>
                {/* 할인율 */}
                {discount > 0 && (
                  <div className='mr-2 text-[#00e7ff]'>
                    {Math.round((discount / price) * 100)}%
                  </div>
                )}
                {/* 할인율 */}

                {/* 6개월 할부시 1달 가격 */}
                <div>
                  <span className='text-xl md:text-lg'>월</span>{' '}
                  <span className='font-bold md:text-xl'>
                    {Math.round((price - discount) / 6).toLocaleString()}
                  </span>
                  <span className='text-xl md:text-lg'>원</span>
                </div>
                {/* 6개월 할부시 1달 가격 */}
              </div>
            </div>
          </div>
          {/* 가격 */}

          {/* 할인 기간 */}
          {discount > 0 && (
            <div className='mt-3 text-sm font-medium text-[#cfcfcf] md:text-xs'>
              <span className='font-bold'>*얼리버드</span>: ~{' '}
              {discount_period.split('-')[1]}/{discount_period.split('-')[2]}
            </div>
          )}
          {/* 할인 기간 */}

          {/* 복사 & 구매 버튼 */}
          <div className='mt-8 flex'>
            <div
              onClick={copyUrl}
              className='flex aspect-square w-[3.625rem] cursor-pointer items-center justify-center rounded bg-[#4a4e57] transition-all hover:opacity-90'
            >
              <svg
                width='20'
                height='10'
                viewBox='0 0 20 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z'
                  fill='white'
                />
              </svg>
            </div>

            <Link href={`/purchase/lecture/${id}`}>
              <a className='ml-3 flex grow cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-xl font-bold text-[#282e38] transition-all hover:opacity-90'>
                신청하기
              </a>
            </Link>
          </div>
          {/* 복사 & 구매 버튼 */}
        </div>
        {/* 강의 상세정보 */}
      </div>
    </Layout>
  );
}
