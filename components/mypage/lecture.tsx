import { cls, trimDate } from '@libs/client/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IProps {
  id: number;
  order: number;
  thumbnail: string;
  name: string;
  created: string;
  expiration: string;
  progress: number;
  category: string;
}

export default function Lecture({
  id,
  order,
  thumbnail,
  name,
  created,
  expiration,
  progress,
  category,
}: IProps) {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        category === 'ongoing'
          ? router.push(`/lecture/my/${id}/${order}`)
          : null
      }
      className={cls(
        category === 'ongoing' ? 'cursor-pointer' : 'opacity-70',
        'flex w-full items-center space-x-6 rounded bg-[#4a4e57] p-8 md:space-x-0 md:p-6'
      )}
    >
      <div className='relative h-40 w-72 rounded bg-gray-700 md:hidden'>
        <Image
          src={thumbnail}
          alt='Lecture Thumbnail'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='flex h-40 flex-col justify-between'>
        <div className='text-lg font-bold md:text-base'>{name}</div>

        <div className='space-y-1.5 md:mt-4'>
          <div className='flex space-x-4 font-medium md:text-sm'>
            <div className='text-[rgba(255,255,255,0.6)]'>강의 시작</div>
            <div>{trimDate(created, 0, 10)}</div>
          </div>

          <div className='flex items-center font-medium md:text-sm'>
            <div className='text-[rgba(255,255,255,0.6)]'>진도율</div>
            <div className='ml-9 h-1 w-72 rounded-full bg-[rgba(0,231,255,0.24)] md:w-40'>
              <div
                className='h-full rounded-full bg-[#00e7ff]'
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className='ml-2 font-bold text-[rgba(255,255,255,0.6)]'>
              {progress}%
            </div>
          </div>

          <div className='flex space-x-4 font-medium md:text-sm'>
            <div className='text-[rgba(255,255,255,0.6)]'>강의 기간</div>
            <div>
              {trimDate(created, 0, 10)} ~ {expiration}
            </div>
          </div>

          <div className='flex space-x-4 font-medium md:text-sm'>
            <div className='text-[rgba(255,255,255,0.6)]'>강의 현황</div>
            <div>{category === 'ongoing' ? '수강중' : '수강완료'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
