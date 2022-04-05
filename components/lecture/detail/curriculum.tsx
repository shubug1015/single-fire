import Layout from '@layouts/sectionLayout';
import Image from 'next/image';

interface IProps {
  data: any[];
}

export default function Curriculum({ data }: IProps) {
  return (
    <Layout bgColor='#282e38' padding='pb-80'>
      <div className='w-full rounded bg-[#373c46] py-12 px-16'>
        <div className='mb-12 text-xl font-bold'>커리큘럼</div>

        <div className='w-full pb-8'>
          <div className='w-full rounded bg-[rgba(229,229,229,0.08)] py-4 px-6 text-lg font-medium'>
            CHAPTER 1. 경제적 자유를 위해
          </div>

          <div className='mt-5 w-full space-y-3 px-6'>
            <div className='text-lg opacity-60'>1-1. 강의를 시작하며</div>
            <div className='text-lg opacity-60'>
              1-2. 경제적 자유를 얻는 로드 맵
            </div>
            <div className='text-lg opacity-60'>1-3. 소제목 타이틀</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
