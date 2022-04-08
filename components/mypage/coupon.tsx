interface IProps {
  num: number;
  name: string;
  discount: string;
}

export default function Coupon({ num, name, discount }: IProps) {
  return (
    <div className='flex h-20 items-center rounded-sm bg-[#373c46]'>
      <div className='flex w-[20%] justify-center'>{num}</div>
      <div className='flex w-[50%] justify-center'>{name}</div>
      <div className='flex grow justify-center'>
        {discount.toLocaleString()}원
      </div>
    </div>
  );
}
