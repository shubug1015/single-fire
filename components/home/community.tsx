import Layout from '@layouts/sectionLayout';

export default function Community() {
  return (
    <Layout
      bgColor=''
      bgImg='bg-[url("/home/community-bg.png")]'
      padding='py-[5.5rem]'
    >
      <div className='w-[41.25rem] bg-[url("/home/community-blur.png")] bg-no-repeat pt-[3.75rem] pb-[7.438rem] pl-[3.75rem]'>
        <div className='inline-block rounded-sm bg-[#ffffff29] py-1.5 px-3 text-sm font-medium'>
          커뮤니티
        </div>
        <div className='mt-6 text-[2.5rem] font-bold'>
          매일 내 포트폴리오를
          <br />
          확인해주는 곳이 있다? 🤔
        </div>
        <div className='mt-12 text-lg'>
          장기투자를 위해서, 반드시 포트폴리오 관리는 필요합니다.
        </div>
      </div>
    </Layout>
  );
}
