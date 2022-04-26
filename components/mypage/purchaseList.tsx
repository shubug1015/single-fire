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
            type='강의'
            category={i.lecture.category}
            tutor={i.lecture.tutor.name}
            title={i.lecture.name}
            date={i.created}
            price={i.lecture.price}
            discount={i.lecture.discount}
            payment={i.method}
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          currentPage={+currentPage}
          url={(page: number) => router.push(`/mypage/purchase/${page}`)}
        />
      </div>
    </div>
  );
}
