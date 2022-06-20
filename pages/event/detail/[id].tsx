import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import { eventApi } from '@libs/api';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const EventDetail: NextPage<{ id: string }> = ({ id }) => {
  const { data: myData } = useSWR('/api/user');
  const { data } = useSWR(`/event/${id}`, () => eventApi.eventDetail(id));
  const router = useRouter();

  const getCoupon = async () => {
    if (myData?.token) {
      const { data } = await eventApi.getCoupon(id, myData?.token as string);
      if (data === 'already exist') {
        alert('이미 발급받은 쿠폰입니다.');
      } else {
        alert('쿠폰이 발급되었습니다.');
      }
    } else {
      router.push('/login');
    }
  };
  return (
    <>
      <SEO
        title='이벤트'
        description='경제적 자유를 꿈꾸는 파이어족을 위해 밀레니얼 머니스쿨만의 이벤트를 소개해드립니다.'
      />
      <Layout padding='pt-32 pb-44 md:py-12'>
        <div className='mb-16 text-center text-5xl font-bold md:text-2xl'>
          {data?.title}
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: data?.content }}
          className='wysiwyg'
        />
      </Layout>

      <Layout bgColor='bg-[rgba(229,229,229,0.08)]' padding='py-20'>
        <div className='flex justify-center space-x-4'>
          {/* <div className='text-2xl font-medium'>
            Sed sollicitudin erat ac eleifend accumsan. Donec finibus
          </div> */}

          {/* <div className='mt-3 font-medium'>
            Sed sollicitudin erat ac eleifend accumsan. Donec finibus
          </div> */}
          {data?.coupon && (
            <div
              onClick={getCoupon}
              className='flex h-14 w-[8.75rem] cursor-pointer items-center justify-center rounded bg-[rgba(229,229,229,0.08)] font-medium'
            >
              쿠폰 받기
            </div>
          )}

          {data?.url && (
            <Link href={data?.url}>
              <a>
                <div className='flex h-14 w-[8.75rem] items-center justify-center rounded bg-[#00e7ff] font-medium text-[#222222]'>
                  신청하기
                </div>
              </a>
            </Link>
          )}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};

export default EventDetail;
