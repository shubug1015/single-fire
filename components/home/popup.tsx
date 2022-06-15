import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PopupBg from '@public/home/popup.png';

interface IProps {
  closePopup: () => void;
}

export default function Popup({ closePopup }: IProps) {
  const popupVar = {
    invisible: {
      opacity: 0,
      scale: 0,
      translateX: '-50%',
      translateY: '-40%',
    },
    visible: {
      opacity: 1,
      scale: 1,
      translateX: '-50%',
      translateY: '-40%',
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      translateX: '-50%',
      translateY: '-40%',
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        return;
      }}
      variants={popupVar}
      initial='invisible'
      animate='visible'
      exit='exit'
      className='absolute top-1/2 left-1/2 h-[35rem] w-[50rem] rounded pt-6 pb-12 shadow-2xl md:h-[14.5rem] md:w-[330px]'
    >
      <div className='absolute top-2 right-2 z-10 flex justify-end md:top-1 md:right-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 cursor-pointer text-black md:w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          onClick={closePopup}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>

      <Link href='/event/1'>
        <a>
          <Image
            src={PopupBg}
            alt='Popup Background'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={100}
            className='rounded'
          />
        </a>
      </Link>
    </motion.div>
  );
}
