import Layout from '@layouts/sectionLayout';
import Lecture from '@components/lecture/lecture';
import Pagebar from '@components/pagebar';

interface IProps {
  title: string;
  data: any[];
  count: number;
}

export default function LectureList({ title, data, count }: IProps) {
  return (
    <Layout bgColor='#282e38' padding='pt-24 pb-44'>
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
        <Pagebar count={count} />
      </div>
    </Layout>
  );
}
