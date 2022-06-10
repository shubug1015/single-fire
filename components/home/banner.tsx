import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  data: any[];
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Banner({ data }: IProps) {
  const PrevArrow = ({ onClick }: ArrowProps) => (
    <div
      onClick={onClick}
      className='absolute top-1/2 left-12 z-[1] flex aspect-square w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white md:!hidden'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 19l-7-7 7-7'
        />
      </svg>
    </div>
  );

  const NextArrow = ({ onClick }: ArrowProps) => (
    <div
      onClick={onClick}
      className='absolute top-1/2 right-12 z-[1] flex aspect-square w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white md:!hidden'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className='aspect-square w-1.5 rounded-full bg-[#ffffff80]'></div>
    ),
  };

  return (
    <div className='h-[51.625rem] w-screen md:h-60'>
      {data && (
        <Slider
          className='!flex h-full items-center'
          {...settings}
          dotsClass='slick-dots absolute !right-[calc((100vw-1180px)/2)] !bottom-[4.25rem] !flex justify-start !w-[55rem] md:!w-fit md:!left-1/2 md:!right-0 md:!-translate-x-1/2 md:!bottom-4'
        >
          {data?.map((i) => (
            <div key={i.order} className='relative'>
              <div className='absolute top-0 left-0 z-[-1] h-full w-full'>
                <div className='relative h-full w-full'>
                  <Image
                    src={i.background}
                    alt='Banner Image'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>

              <div className='relative mx-auto flex h-[51.625rem] max-w-[1180px] flex-col pt-36 md:h-60 md:max-w-[330px] md:pt-10'>
                <div className='z-[1] w-fit whitespace-pre-wrap text-[3.25rem] font-bold md:text-lg'>
                  {i.title}
                </div>

                <div className='z-[1] mt-[3.75rem] w-fit whitespace-pre-wrap font-light md:mt-2 md:text-xs'>
                  {i.text}
                </div>

                <Link href={i.url}>
                  <a>
                    <div className='absolute top-1/2 right-0 h-[38.375rem] w-[55rem] -translate-y-1/2 md:h-40 md:w-56'>
                      <div className='relative h-full w-full rounded-md shadow-sm'>
                        <Image
                          src={i.img}
                          alt='Banner Image'
                          layout='fill'
                          objectFit='cover'
                          className='rounded-md md:rounded'
                        />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
