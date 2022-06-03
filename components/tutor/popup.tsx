import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface IProps {
  category: string;
  name: string;
  text: string;
  bgImg: string;
  tag: string;
  career: any[];
  lectureId: number;
  closePopup: () => void;
}

export default function Popup({
  category,
  name,
  text,
  bgImg,
  tag,
  career,
  lectureId,
  closePopup,
}: IProps) {
  const popupVar = {
    invisible: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div
      onClick={closePopup}
      className='fixed top-[150px] left-0 z-50 flex h-[calc(100vh-150px)] w-screen items-center justify-center bg-[rgba(0,0,0,0.6)] md:top-[104px] md:h-[calc(100vh-104px)]'
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          return;
        }}
        variants={popupVar}
        initial='invisible'
        animate='visible'
        exit='exit'
        className='w-[52rem] rounded bg-[#282e38] pt-6 pb-12 md:w-[330px] md:py-6'
      >
        <div className='mr-6 flex justify-end md:mr-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 cursor-pointer'
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

        <div className='mx-16 mt-8 grid h-full grid-cols-2 gap-x-4 md:mx-4 md:mt-1 md:grid-cols-1'>
          <div className='w-full'>
            <div className='font-medium md:text-sm'>{category}</div>

            <div className='mt-4 text-2xl font-medium md:text-xl'>{name}</div>

            <div className='mt-2 text-[#cfcfcf] md:text-sm'>{text}</div>

            <div className='mt-6 text-[#cfcfcf] md:text-sm'>{tag}</div>

            <div className='mt-10 text-xl font-medium md:text-sm'>
              상세 이력
            </div>

            <div className='mt-4 mb-24 text-[#cfcfcf] md:mb-10'>
              {career.map((i) => (
                <div key={i.id} className='flex items-center'>
                  <span className='mr-2 text-2xl'>·</span>
                  <span className='md:text-sm'>{i.text}</span>
                </div>
              ))}
            </div>

            <Link href={`/lecture/detail/${lectureId}`}>
              <a>
                <div className='flex h-14 w-40 items-center justify-center rounded bg-[#00e7ff] text-[#282e38] transition-all hover:opacity-90 md:h-12 md:w-36 md:text-sm'>
                  강의 보러가기 →
                </div>
              </a>
            </Link>
          </div>

          {/* 강사 이미지 */}
          <div className='relative h-full w-full md:hidden'>
            <Image
              src={bgImg}
              alt='Tutor'
              layout='fill'
              objectFit='cover'
              className='rounded-r-md'
            />

            {/* <div className='absolute top-0 left-0 h-full w-full rounded-r-md bg-gradient-to-r from-[#282e38] to-transparent' /> */}
          </div>
          {/* 강사 이미지 */}
        </div>
      </motion.div>
    </div>
  );
}
