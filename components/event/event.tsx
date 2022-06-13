import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: number;
  thumbnail: string;
}

export default function Event({ id, thumbnail }: IProps) {
  return (
    <Link href={`/event/detail/${id}`}>
      <a>
        <div className='relative h-80 w-full rounded-sm bg-[rgba(229,229,229,0.08)] md:h-[90px]'>
          <Image
            src={thumbnail}
            alt='Event Thumbnail'
            layout='fill'
            objectFit='cover'
            className='rounded-sm md:h-20'
          />
        </div>
      </a>
    </Link>
  );
}
