import BgImg from '@public/community/banner-bg.png';
import Image from 'next/image';

interface IProps {
  title: string;
}

export default function Banner({ title }: IProps) {
  return (
    <div className='relative flex h-60 w-screen items-center justify-center md:h-20'>
      <div className='text-[2rem] font-bold md:text-lg'>{title}</div>

      <div className='absolute top-0 left-0 -z-[1] h-full w-full'>
        <div className='relative h-full w-full'>
          <Image
            src={BgImg}
            alt='Community Banner Image'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
