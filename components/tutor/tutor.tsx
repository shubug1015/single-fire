import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import Popup from './popup';

interface IProps {
  id: number;
  thumbnail: string;
  category: string;
  name: string;
  text: string;
  bgImg: string;
  tag: string;
  career: any[];
  lectureId: number;
}

export default function Tutor({
  thumbnail,
  category,
  name,
  text,
  bgImg,
  tag,
  career,
  lectureId,
}: IProps) {
  const [popup, setPopup] = useState(false);

  const openPopup = () => setPopup(true);
  const closePopup = () => setPopup(false);

  return (
    <>
      <div onClick={openPopup}>
        <div className='relative h-60 w-[23.75rem] cursor-pointer'>
          <Image
            src={thumbnail}
            alt='Tutor Thumbnail'
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        </div>

        <div className='mt-4 mb-1.5 text-sm font-medium text-[#b1b1b1]'>
          {category}
        </div>

        <div className='text-lg font-medium'>{name}</div>

        <div className='text-[#9e9e9e]'>{text}</div>
      </div>

      <AnimatePresence>
        {popup && (
          <Popup
            category={category}
            name={name}
            text={text}
            bgImg={bgImg}
            tag={tag}
            career={career}
            lectureId={lectureId}
            closePopup={closePopup}
          />
        )}
      </AnimatePresence>
    </>
  );
}
