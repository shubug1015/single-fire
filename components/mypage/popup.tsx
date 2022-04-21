import { cls } from '@libs/client/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

interface IProps {
  title: string;
  content: string;
  closePopup: () => void;
}

export default function Popup({ title, content, closePopup }: IProps) {
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
        className='w-[35rem] rounded bg-[#282e38] py-12 px-10'
      >
        <div className='flex justify-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-9 w-9 cursor-pointer'
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

        <div className='text-center text-2xl font-medium'>{title}</div>

        <div
          className={cls(
            title === '환불신청' ? 'font-medium' : '',
            'mt-5 whitespace-pre-wrap text-center text-[#cfcfcf]'
          )}
        >
          {content}
        </div>

        <div
          onClick={closePopup}
          className='mt-12 flex cursor-pointer justify-center rounded bg-[#00e7ff] py-4 text-lg font-medium text-[#282e38] transition-all hover:opacity-90'
        >
          확인
        </div>
      </motion.div>
    </div>
  );
}
