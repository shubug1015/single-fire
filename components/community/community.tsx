import { gradeImg } from '@components/grade';
import { trimDate } from '@libs/client/utils';
import { cls } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  id: number;
  category: string;
  type?: string;
  num?: number;
  subject: string;
  title: string;
  created: string;
  name: string;
  grade?: string;
  view: number;
}

export default function Community({
  id,
  category,
  type,
  num,
  subject,
  title,
  created,
  name,
  grade,
  view,
}: IProps) {
  return (
    <Link href={`/community/${category}/detail/${id}`}>
      <a>
        <div
          className={cls(
            type === 'notice' ? 'mt-0.5 rounded-sm bg-[#4a4e57]' : '',
            'flex h-[3.75rem] items-center transition-all hover:opacity-70 md:hidden'
          )}
        >
          <div className='flex w-[8.5%] justify-center'>
            {type === 'notice' ? (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM18.88 16.82V11C18.88 7.75 16.63 5.03 13.59 4.31V3.59C13.59 2.71 12.88 2 12 2C11.12 2 10.41 2.71 10.41 3.59V4.31C7.37 5.03 5.12 7.75 5.12 11V16.82L3 18.94V20H21V18.94L18.88 16.82ZM16 13.01H13V16.01H11V13.01H8V11H11V8H13V11H16V13.01Z'
                  fill='#FF8A00'
                />
                <rect x='7' y='7' width='10' height='10' fill='#FF8A00' />
              </svg>
            ) : (
              num
            )}
          </div>

          <div
            className={cls(
              type === 'notice' ? 'font-bold text-[#ff8a00]' : '',
              'flex w-40 justify-center'
            )}
          >
            {subject}
          </div>

          <div
            className={cls(
              type === 'notice' ? 'font-medium text-[#ff8a00]' : '',
              'flex grow justify-start'
            )}
          >
            {title}
          </div>

          <div className='flex w-[10%] items-center justify-center'>
            {name}
            {grade && (
              <div className='relative ml-1 aspect-square h-5 w-5'>
                {gradeImg(grade)}
              </div>
            )}
          </div>

          <div className='flex w-[10%] justify-center'>
            {trimDate(created, 5, 10)}
          </div>

          <div className='flex w-[10%] justify-center'>{view}</div>
        </div>

        <div className='hidden md:block'>
          <div className='flex items-center'>
            <div
              className={cls(
                type === 'notice' ? 'mt-0.5 rounded-sm bg-[#4a4e57]' : '',
                'w-full p-4 transition-all hover:opacity-70'
              )}
            >
              <div className='flex'>
                <div
                  className={cls(
                    type === 'notice'
                      ? 'font-bold text-[#ff8a00]'
                      : 'text-[#cfcfcf]',
                    'mr-2 text-xs'
                  )}
                >
                  {subject}
                </div>
                <div
                  className={cls(
                    type === 'notice' ? 'font-medium text-[#ff8a00]' : '',
                    'text-xs'
                  )}
                >
                  {title}
                </div>
              </div>
              <div className='mt-2 flex text-xs'>
                <div className='flex items-center'>
                  {name}{' '}
                  {grade && (
                    <div className='relative ml-1 aspect-square h-3 w-3'>
                      {gradeImg(grade)}
                    </div>
                  )}
                </div>
                <div className='text-[#cfcfcf]'>
                  |&nbsp;&nbsp;{trimDate(created, 5, 10)}&nbsp;&nbsp;|
                </div>
                <div className='text-[#cfcfcf]'>&nbsp;&nbsp;조회 {view}</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
