import { trimDate } from '@libs/client/utils';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: number;
  category: number;
  subject: string;
  title: string;
  created: string;
}

export default function Community({
  id,
  category,
  subject,
  title,
  created,
}: IProps) {
  return (
    <div>
      <Link href={`/community/detail/${category}/${id}`}>
        <a>
          <div className='flex h-[3.75rem] w-full items-center space-x-6 rounded bg-[#4a4e57] md:hidden'>
            <div className='flex w-[6.25rem] justify-center font-medium'>
              [{category}]
            </div>
            <div className='flex w-[6.25rem] justify-center'>{subject}주제</div>
            <div className='grow'>{title}</div>
            <div className='flex w-[7.5rem] justify-center'>
              {trimDate(created, 5, 10)}
            </div>
          </div>

          <div className='hidden rounded bg-[#4a4e57] p-6 md:block'>
            <div>[{category}]</div>
            <div className='mt-4 flex'>
              <div className='mr-4 text-[#cfcfcf]'>주제</div>
              <div>
                <div className='grow'>{title}</div>
                <div className='mt-3 text-[#9e9e9e]'>
                  {trimDate(created, 5, 10)}
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
