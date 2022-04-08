import Layout from '@layouts/sectionLayout';
import Pagebar from '@components/pagebar';
import Event from './event';

interface IProps {
  data: any[];
  count: number;
}

export default function EventList({ data, count }: IProps) {
  return (
    <div>
      <div className='space-y-6'>
        {data?.map((i, index) => (
          <Event key={i} />
        ))}
      </div>

      <div className='mt-24 flex justify-center'>
        <Pagebar count={count} />
      </div>
    </div>
  );
}
