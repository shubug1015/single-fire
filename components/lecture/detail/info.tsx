import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import { useState } from 'react';

interface IProps {
  data: any[];
}

export default function Info({ data }: IProps) {
  const [imgHeight, setImgHeight] = useState(0);
  return (
    <Layout padding='pb-80'>
      {data.map((i) => (
        <div
          key={i.id}
          className='relative w-full'
          style={{ height: imgHeight }}
        >
          <Image
            src={i.detail_image}
            alt='Lecture Detail Image'
            layout='fill'
            objectFit='contain'
            onLoad={({ target }) => {
              const { clientWidth, naturalWidth, naturalHeight } =
                target as HTMLImageElement;
              setImgHeight((naturalHeight / naturalWidth) * clientWidth);
            }}
          />
        </div>
      ))}
    </Layout>
  );
}
