import { trimDate } from '@libs/client/utils';

interface IProps {
  lecture: string;
  point: number;
  date: string;
}

export default function Point({ lecture, point, date }: IProps) {
  return (
    <div className='flex h-20 items-center rounded-sm bg-[#373c46]'>
      <div className='flex grow justify-center'>{lecture}</div>
      <div className='flex w-[28%] justify-center'>
        -{point.toLocaleString()} P
      </div>
      <div className='flex w-[28%] justify-center'>{trimDate(date, 0, 10)}</div>
    </div>
  );
}
