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
  console.log(data);
  return (
    <>
      <SEO title='이벤트' />
      <Layout padding='pt-32 pb-44'>
        <div className='mb-16 text-center text-5xl font-bold'>
          {data?.title}
        </div>

        <div dangerouslySetInnerHTML={{ __html: data?.content }} />

        {data?.coupon && (
          <div onClick={getCoupon} className='cursor-pointer'>
            쿠폰 받기
          </div>
        )}

        <Link href={data?.url}>
          <a>
            <div>강의 신청하기</div>
          </a>
        </Link>
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
