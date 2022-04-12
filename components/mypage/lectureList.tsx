import Lecture from '@components/mypage/lecture';
import Pagebar from '@components/pagebar';

interface IProps {
  data: any[];
  count: number;
}

export default function LectureList({ data, count }: IProps) {
  return (
    <div>
      <div className='space-y-2'>
        {data?.map((i) => (
          <Lecture
            key={i.id}
            id={i.id}
            thumbnail={i.lecture_thumbnail}
            name={i.lecture_name}
            created={i.created}
            expiration={i.expiration}
            progress={i.total_progress}
          />
        ))}
      </div>

      <div className='mt-20 flex justify-center'>
        <Pagebar count={count} />
      </div>
    </div>
  );
}
