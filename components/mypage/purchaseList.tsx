import Pagebar from '@components/pagebar';
import Purchase from './purchase';

interface IProps {
  data: any[];
  count: number;
}

export default function PurchaseList({ data, count }: IProps) {
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
        <Pagebar count={count} />
      </div>
    </div>
  );
}
