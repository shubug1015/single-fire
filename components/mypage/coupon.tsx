interface IProps {
  num: number;
  name: string;
  discount: string;
}

export default function Coupon({ num, name, discount }: IProps) {
  return (
    <>
      <div className='flex h-20 items-center rounded-sm bg-[#373c46] md:hidden'>
        <div className='flex w-[10%] justify-center'>{num}</div>
        <div className='flex w-[50%] justify-center'>{name}</div>
        <div className='flex w-[20%] justify-center'>
          {discount.toLocaleString()}원
        </div>
        <div className='flex grow justify-center'>모든 강의</div>
      </div>

      <div className='hidden rounded-sm bg-[#373c46] p-6 md:block'>
        <div>{name}</div>
        <div className='mt-4 text-sm text-[#cfcfcf]'>모든 강의</div>
      </div>
    </>
  );
}
