import Layout from '@layouts/sectionLayout';
import Pagebar from '@components/pagebar';
import Event from './event';
import { useRouter } from 'next/router';

interface IProps {
  data: any[];
  totalItems: number;
}

export default function EventList({ data, totalItems }: IProps) {
  const router = useRouter();
  const currentPage = router.query.page as string;
  return (
    <div>
      <div className='space-y-6'>
        {data?.map((i) => (
          <Event key={i} />
        ))}
      </div>

      <div className='mt-24 flex justify-center'>
        <Pagebar
          totalItems={totalItems}
          itemsPerPage={5}
          currentPage={+currentPage}
          url={(page: number) => router.push(`/event/${page}`)}
        />
      </div>
    </div>
  );
}
