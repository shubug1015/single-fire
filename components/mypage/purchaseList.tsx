import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';
import Purchase from './purchase';

interface IProps {
  data: any[];
  totalItems: number;
}

export default function PurchaseList({ data, totalItems }: IProps) {
  const router = useRouter();
  const currentPage = router.query.page as string;
  return (
    <div>
      <div className='space-y-2'>
        {data?.map((i) => (
          <Purchase
            key={i.id}
            state={i.refund}
            type={i.lecture.category ? '강의' : '커뮤니티'}
            category={i.lecture.category || ''}
            tutor={i.lecture?.tutor?.name || ''}
            title={i.lecture.name || i.community.name}
            date={i.created}
            price={i.lecture.price || i.community.price}
            discount={i.discount}
            payment={i.method}
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={5}
          currentPage={+currentPage}
          url={(page: number) => router.push(`/mypage/purchase/${page}`)}
        />
      </div>
    </div>
  );
}
