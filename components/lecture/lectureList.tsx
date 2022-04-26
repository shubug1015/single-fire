import Layout from '@layouts/sectionLayout';
import Lecture from '@components/lecture/lecture';
import Pagebar from '@components/pagebar';
import { useRouter } from 'next/router';

interface IProps {
  title: string;
  data: any[];
  totalItems: number;
}

export default function LectureList({ title, data, totalItems }: IProps) {
  const router = useRouter();
  const category = router.query.category;
  const currentPage = router.query.page as string;
  return (
    <Layout padding='pt-24 pb-44'>
      <h1 className='text-2xl font-bold'>{title}</h1>

      <div className='mt-8 grid grid-cols-3 gap-x-5 gap-y-20'>
        {data?.map((i) => (
          <Lecture
            key={i.id}
            id={i.id}
            thumbnail={i.thumbnail}
            category={i.category}
            tutor={i.tutor}
            name={i.name}
          />
        ))}
      </div>

      <div className='mt-24 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          currentPage={+currentPage}
          url={(page: number) => router.push(`/lecture/${category}/${page}`)}
        />
      </div>
    </Layout>
  );
}
