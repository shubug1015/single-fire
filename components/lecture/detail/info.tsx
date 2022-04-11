import Layout from '@layouts/sectionLayout';
import Image from 'next/image';

interface IProps {
  data: any[];
}

export default function Info({ data }: IProps) {
  return (
    <Layout padding='pb-80'>
      {data.map((i) => (
        <div key={i.id} className='relative w-full'>
          <Image
            src={i.detail_image}
            alt='Lecture Detail Image'
            layout='responsive'
            width='100%'
            height='100%'
            objectFit='contain'
          />
        </div>
      ))}
    </Layout>
  );
}
