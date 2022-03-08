import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BannerImg from '@public/home/banner-img-1.png';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Banner() {
  const PrevArrow = ({ onClick }: ArrowProps) => (
    <div
      onClick={onClick}
      className='absolute top-1/2 -translate-y-1/2 left-12 flex justify-center items-center w-9 aspect-square border border-white rounded-full z-[1] cursor-pointer'
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
      className='absolute top-1/2 -translate-y-1/2 right-12 flex justify-center items-center w-9 aspect-square border border-white rounded-full z-[1] cursor-pointer'
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
    appendDots: (dots: any) => <ul style={{ bottom: '4.25rem' }}>{dots}</ul>,
    customPaging: () => (
      <div className='w-1.5 aspect-square bg-[#ffffff80] rounded-full'></div>
    ),
  };

  return (
    <div className='w-screen h-[51.625rem] bg-[#2f436de0] bg-[url("/home/banner-bg.png")] bg-no-repeat bg-center bg-cover'>
      <Slider className='!flex items-center h-full' {...settings}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className='relative flex flex-col pt-36 h-[51.625rem] max-w-[1180px] mx-auto'>
              <div className='text-[3.25rem] font-bold z-[1]'>
                Lorem ipsum
                <br />
                dolor sit amet,
                <br />
                adipiscing elit.
              </div>

              <div className='font-light mt-[3.75rem] z-[1]'>
                Sed sollicitudin erat ac eleifend,
                <br />
                accumsan. Donec finibus
                <br />
                vestibulum urna, ultrices dictum
                <br />
                diam auctor sit amet.
              </div>

              <div className='absolute top-1/2 -translate-y-1/2 right-0'>
                <div className='relative w-[55rem] h-[38.375rem] rounded-md shadow-sm'>
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
