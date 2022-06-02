import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';

interface Object {
  [key: string]: any;
}

interface IProps {
  tutor: Object;
  lecture_community: Object;
}

export default function Community({ tutor, lecture_community }: IProps) {
  return (
    <Layout bgColor='#282e38' padding='pb-80'>
      <div className='flex w-full space-x-5 md:block md:bg-[#373c46]'>
        <div className='w-[30rem] rounded bg-[#373c46] p-10'>
          <div className='font-bold'>강사소개</div>

          <div className='mt-10 text-xl font-medium'>{tutor.name}</div>
          <div className='mt-2 text-[#cfcfcf]'>{tutor.tag}</div>
          <div className='mt-4'>{tutor.text}</div>

          <div className='mt-10 text-lg font-medium'>상세 이력</div>
          <div className='mt-4 text-[#cfcfcf]'>
            {tutor.career.map((i: any) => (
              <div key={i.id} className='flex items-center'>
                <span className='mr-2 text-2xl'>·</span>
                <span>{i.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex w-[42.625rem] flex-col justify-between rounded bg-[#373c46] p-10 md:w-full'>
          <div>
            <div className='font-bold'>커뮤니티</div>

            <div className='mt-10 whitespace-pre-wrap'>
              {lecture_community.text.length > 0
                ? lecture_community.text
                : '커뮤니티가 존재하지 않습니다.'}
            </div>
          </div>

          {lecture_community.lecture && (
            <div className='flex justify-end'>
              <div
                onClick={() => window.open(lecture_community.url)}
                className='flex h-14 w-48 cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-[#282e38] transition-all hover:opacity-90'
              >
                커뮤니티 바로가기 →
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
