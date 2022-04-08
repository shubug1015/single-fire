import { motion } from 'framer-motion';
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
      className='fixed top-[150px] left-0 z-50 flex h-[calc(100vh-150px)] w-screen items-center justify-center bg-[rgba(0,0,0,0.6)]'
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
        className='h-[40rem] w-[52rem] rounded bg-[#282e38]'
      >
        <div className='mt-6 mr-6 flex justify-end'>
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

        <div className='mx-16 mt-8'>
          <div className='font-medium'>{category}</div>

          <div className='mt-4 text-2xl font-medium'>{name}</div>

          <div className='mt-2 text-[#cfcfcf]'>{text}123</div>

          <div className='mt-6 text-[#cfcfcf]'>{tag}123</div>

          <div className='mt-10 text-xl font-medium'>상세 이력</div>

          <div className='mt-4 mb-24 text-[#cfcfcf]'>
            {career.map((i) => (
              <div key={i.id} className='flex items-center'>
                <span className='mr-2 text-2xl'>·</span>
                <span>{i.text}</span>
              </div>
            ))}
          </div>

          <Link href={`/lecture/${lectureId}`}>
            <a>
              <div className='flex h-14 w-40 items-center justify-center rounded bg-[#00e7ff] text-[#282e38] transition-all hover:opacity-90'>
                강의 보러가기 →
              </div>
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
