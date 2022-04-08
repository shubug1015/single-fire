import Pagebar from '@components/pagebar';
import Point from './point';

interface IProps {
  data: any[];
  count: number;
}

export default function PointList({ data, count }: IProps) {
  return (
    <div>
      <div className='space-y-0.5'>
        <div className='flex h-[3.75rem] items-center rounded-sm bg-[#4a4e57]'>
          <div className='flex grow justify-center'>적용상품</div>
          <div className='flex w-[28%] justify-center'>사용 포인트</div>
          <div className='flex w-[28%] justify-center'>유효기간</div>
        </div>

        {data?.map((i, index) => (
          <Point key={i} lecture='모든 강의' point={2000} period='2022-01-15' />
        ))}
      </div>

      <div className='mt-24 flex justify-center'>
        <Pagebar count={count} />
      </div>
    </div>
  );
}
