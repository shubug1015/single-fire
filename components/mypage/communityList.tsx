import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';
import Community from './community';

interface IProps {
  data: any[];
  totalItems: number;
}

export default function CommunityList({ data, totalItems }: IProps) {
  const router = useRouter();
  const currentPage = router.query.page as string;
  return (
    <div>
      <div className='space-y-1'>
        {data?.map((i) => (
          <Community
            key={i.id}
            id={i.id}
            category={i.community.name}
            categoryId={i.community.id}
            subject={i.subject}
            title={i.title}
            created={i.created}
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={5}
          currentPage={+currentPage}
          url={(page: number) => router.push(`/mypage/community/${page}`)}
        />
      </div>
    </div>
  );
}
