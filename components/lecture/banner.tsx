import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BannerImg from '@public/lecture/banner-img-1.png';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Banner() {
  const PrevArrow = ({ onClick }: ArrowProps) => (
    <div
      onClick={onClick}
      className='absolute top-1/2 left-12 z-[1] flex aspect-square w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white'
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
      className='absolute top-1/2 right-12 z-[1] flex aspect-square w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white'
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
    speed: 500,
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
    <div className='h-[35rem] w-screen bg-[#3d4147] bg-cover bg-center bg-no-repeat'>
      <Slider
        className='!flex h-full items-center'
        {...settings}
        dotsClass='slick-dots absolute left-1/2 !bottom-6 -translate-x-1/2 !flex justify-center'
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className='relative mx-auto flex h-[35rem] max-w-[1180px] flex-col pt-36'>
              <div className='z-[1] text-[2.5rem] font-bold'>
                Lorem ipsum dolor sit <br />
                amet, adipiscing elit.
              </div>

              <div className='z-[1] mt-8 font-medium'>
                Sed sollicitudin erat ac eleifend, accumsan. Donec finibus
                <br />
                vestibulum urna, ultrices dictum diam auctor sit amet.
              </div>

              <div className='absolute top-1/2 right-0 -translate-y-1/2'>
                <div className='relative h-[21.75rem] w-[31rem] rounded-md shadow-sm'>
                  <Image
                    src={BannerImg}
                    alt='Banner Image'
                    placeholder='blur'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
