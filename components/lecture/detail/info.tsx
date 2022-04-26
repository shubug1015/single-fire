import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IProps {
  data: any[];
}

export default function Info({ data }: IProps) {
  const [imgHeight, setImgHeight] = useState([{ id: 0, height: 0 }]);

  useEffect(() => {
    setImgHeight(
      [...Array(data?.length)].map((i, index) => ({ id: index, height: 0 }))
    );
  }, [data]);
  return (
    <Layout padding='pb-80'>
      {data?.map((i, index) => (
        <div
          key={i.id}
          className='relative w-full'
          style={{ height: imgHeight[index]?.height }}
        >
          <Image
            src={i.detail_image}
            alt='Lecture Detail Image'
            layout='fill'
            objectFit='contain'
            onLoad={({ target }) => {
              const { clientWidth, naturalWidth, naturalHeight } =
                target as HTMLImageElement;
              setImgHeight((prev) =>
                prev.map((j) => ({
                  id: j.id,
                  height:
                    j.id === index
                      ? (naturalHeight / naturalWidth) * clientWidth
                      : j.height,
                }))
              );
            }}
          />
        </div>
      ))}
    </Layout>
  );
}
