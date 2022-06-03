import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: number;
  thumbnail: string;
  category: string;
  tutor: any;
  name: string;
}

export default function Lecture({
  id,
  thumbnail,
  category,
  tutor,
  name,
}: IProps) {
  return (
    <Link href={`/lecture/detail/${id}`}>
      <a>
        <div className='relative h-60 w-[23.75rem] md:h-[6.375rem] md:w-40'>
          <Image
            src={thumbnail}
            alt='Lecture Thumbnail'
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        </div>

        <div className='mt-4 mb-1.5 text-sm font-medium text-[#b1b1b1] md:mt-2 md:mb-0 md:text-[0.688rem]'>
          {category} ˙ {tutor.name}
        </div>

        <div className='text-lg font-medium md:text-[0.812rem]'>{name}</div>
      </a>
    </Link>
  );
}
