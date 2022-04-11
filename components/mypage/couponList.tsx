import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';
import Coupon from './coupon';

interface IProps {
  data: any[];
  count: number;
}

export default function CouponList({ data, count }: IProps) {
  const router = useRouter();
  const { page } = router.query as any;

  return (
    <div>
      <div className='space-y-0.5'>
        <div className='flex h-[3.75rem] items-center rounded-sm bg-[#4a4e57]'>
          <div className='flex w-[10%] justify-center'>번호</div>
          <div className='flex w-[50%] justify-center'>쿠폰명</div>
          <div className='flex w-[20%] justify-center'>할인금액</div>
          <div className='flex grow justify-center'>적용상품</div>
        </div>

        {data.map((i, index) => (
          <Coupon
            key={i}
            num={(+page - 1) * 12 + index + 1}
            name={i.name}
            discount={i.price}
          />
        ))}
      </div>

      <div className='mt-24 flex justify-center'>
        <Pagebar count={count} />
      </div>
    </div>
  );
}
