import Layout from '@layouts/sectionLayout';

interface IProps {
  data: any[];
}

export default function Curriculum({ data }: IProps) {
  return (
    <Layout padding='pb-80'>
      <div className='w-full rounded bg-[#373c46] py-12 px-16 md:p-6'>
        <div className='mb-12 text-xl font-bold md:mb-6 md:text-lg'>
          커리큘럼
        </div>

        {data.map((i, chapterId) => (
          <div key={i.id} className='w-full pb-8'>
            <div className='w-full rounded bg-[rgba(229,229,229,0.08)] py-4 px-6 text-lg font-medium md:text-base'>
              {/* CHAPTER {chapterId + 1}. */}
              {i.title}
            </div>

            <div className='mt-5 w-full space-y-3 px-6'>
              {i.video.map((j: any, lectureId: number) => (
                <div key={j.id} className='text-lg opacity-60 md:text-sm'>
                  {/* {chapterId + 1}-{lectureId + 1}. */}
                  {j.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
