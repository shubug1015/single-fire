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
            state='결제완료'
            type='강의'
            category='카테고리'
            tutor='강사 이름'
            title='강의 제목'
            date={i.created.split('T')[0].slice(0, 10)}
            price={230000}
            discount={30000}
            payment='카드 결제'
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        <Pagebar count={count} />
      </div>
    </div>
  );
}
