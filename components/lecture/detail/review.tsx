import Layout from '@layouts/sectionLayout';
import Image from 'next/image';

interface IProps {
  data: any[];
}

export default function Review({ data }: IProps) {
  return (
    <Layout padding='pb-80'>
      <div className='w-full space-y-4'>
        <div className='w-full rounded bg-[#373c46] p-10'>
          <div className='text-lg font-medium'>닉네임🔥</div>

          <div className='opacity-60'>2021. 11. 22</div>

          <div className='mt-7 text-lg'>작성한 글이 들어갑니다.</div>
        </div>
      </div>
    </Layout>
  );
}
