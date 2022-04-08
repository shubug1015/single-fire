import Pagebar from '@components/pagebar';
import Community from './community';

interface IProps {
  data: any[];
  count: number;
}

export default function CommunityList({ data, count }: IProps) {
  return (
    <div>
      <div className='space-y-1'>
        {data?.map((i) => (
          <Community
            key={i.id}
            id={i.id}
            category={i.community.name}
            subject={i.subject}
            title={i.title}
            created={i.created.split('T')[0].slice(5, 10)}
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        <Pagebar count={count} />
      </div>
    </div>
  );
}
