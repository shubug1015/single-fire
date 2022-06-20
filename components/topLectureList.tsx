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
        <h1 className='text-2xl font-bold md:whitespace-pre-wrap md:text-lg'>
          {title}
        </h1>

        <Link href={url}>
          <a className='flex items-center'>
            <span className='font-medium text-[#cfcfcf] md:text-sm'>
              더 보기
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mt-0.5 ml-2 w-3 text-[#cfcfcf] md:hidden'
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
      <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-12 md:mt-6 md:flex md:gap-x-4 md:overflow-x-scroll'>
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
