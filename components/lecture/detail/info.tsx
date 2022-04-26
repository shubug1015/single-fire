import Layout from '@layouts/sectionLayout';
import Image from 'next/image';

interface IProps {
  data: any[];
}

export default function Info({ data }: IProps) {
  return (
    <Layout padding='pb-80'>
      {data.map((i) => (
        <div key={i.id} className='relative h-[1600rem] w-full'>
          <Image
            src={i.detail_image}
            alt='Lecture Detail Image'
            layout='fill'
            objectFit='contain'
            quality={100}
          />
        </div>
      ))}
    </Layout>
  );
}
