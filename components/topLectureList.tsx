import Link from 'next/link';
import Lecture from '@components/lecture/lecture';

interface IProps {
  title: string;
  data: any[];
  url: string;
}

export default function TopLectureList({ title, data, url }: IProps) {
  return (
    <div>
      {/* 제목 & 더보기 */}
      <div className='flex w-full items-center justify-between'>
        <div className='text-2xl font-bold md:text-lg'>{title}</div>

        <Link href={url}>
          <a className='flex items-center'>
            <span className='font-medium text-[#cfcfcf]'>더 보기</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mt-0.5 ml-2 w-3 text-[#cfcfcf]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={3}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
        </Link>
      </div>
      {/* 제목 & 더보기 */}

      {/* 강의 리스트 */}
      <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-12 md:mt-6 md:grid-cols-2 md:gap-x-1'>
        {data?.map((i) => (
          <Lecture
            key={i.id}
            id={i.id}
            thumbnail={i.thumbnail}
            category={i.category}
            tutor={i.tutor}
            name={i.name}
          />
        ))}
      </div>
      {/* 강의 리스트 */}
    </div>
  );
}
