import Layout from '@layouts/sectionLayout';
import Pagebar from '@components/pagebar';
import Tutor from './tutor';
import { useRouter } from 'next/router';

interface IProps {
  title: string;
  data: any[];
  totalItems: number;
}

export default function TutorList({ title, data, totalItems }: IProps) {
  const router = useRouter();
  const currentPage = router.query.page as string;
  return (
    <Layout padding='pt-24 pb-44 md:py-10'>
      <h1 className='text-2xl font-bold md:text-xl'>{title}</h1>

      <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-20 md:mt-6 md:grid-cols-2 md:gap-x-4 md:gap-y-6'>
        {data?.map((i) => (
          <Tutor
            key={i.id}
            id={i.id}
            thumbnail={i.thumbnail}
            category={i.category}
            name={i.name}
            text={i.text}
            bgImg={i.image}
            tag={i.tag}
            career={i.career}
            lectureId={i.lecture}
          />
        ))}
      </div>

      <div className='mt-24 flex justify-center md:mt-10'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={9}
          currentPage={+currentPage}
          url={(page: number) => router.push(`/tutor/${page}`)}
        />
      </div>
    </Layout>
  );
}
