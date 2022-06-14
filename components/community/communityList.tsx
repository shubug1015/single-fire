import Layout from '@layouts/sectionLayout';
import Pagebar from '@components/pagebar';
import Community from './community';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';

interface IProps {
  notice: any[];
  data: any[];
  totalItems: number;
}

export default function CommunityList({ notice, data, totalItems }: IProps) {
  const { data: myData } = useSWR('/api/user');
  const router = useRouter();
  const { category, slug } = router.query;
  const [currentPage, orderType, searchType, searchTerm] = slug as string[];
  return (
    <Layout padding='pb-44'>
      <div className='flex h-[3.75rem] items-center bg-[rgba(229,229,229,0.08)] md:hidden'>
        <div className='flex w-[8.5%] justify-center'>번호</div>
        <div className='flex w-40 justify-center'>주제</div>
        <div className='flex grow justify-center'>제목</div>
        <div className='flex w-[10%] justify-center'>작성자</div>
        <div className='flex w-[10%] justify-center'>작성일</div>
        <div className='flex w-[10%] justify-center'>조회수</div>
      </div>

      {notice?.map((i) => (
        <Community
          key={i.id}
          id={i.id}
          category={category as string}
          type={'notice'}
          subject={'공지'}
          title={i.title}
          created={i.created}
          name={'관리자'}
          view={i.view_num}
        />
      ))}

      {data?.map((i, index) => (
        <Community
          key={i.id}
          id={i.id}
          category={category as string}
          num={(+currentPage - 1) * 12 + index + 1}
          subject={i.subject}
          title={i.title}
          created={i.created}
          name={i.user.name}
          grade={i.user.grade}
          view={i.view_num}
        />
      ))}

      <div className='mt-24 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={12}
          currentPage={+currentPage}
          url={(page: number) =>
            router.push(
              `/community/${category}/${page}/${orderType}/${searchType}/${
                searchTerm || ''
              }`
            )
          }
        />
      </div>

      {myData?.token && (
        <div className='flex justify-end'>
          <Link href={`/community/${category}/post`}>
            <a>
              <div className='flex h-[2.625rem] w-[6.25rem] items-center justify-center rounded-sm bg-[#00e7ff] text-sm font-medium text-[#282e38]'>
                글쓰기
              </div>
            </a>
          </Link>
        </div>
      )}
    </Layout>
  );
}
