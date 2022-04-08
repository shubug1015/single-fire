import Layout from '@layouts/sectionLayout';

interface IProps {
  subject: string;
  title: string;
  user: any;
  created: string;
  view_num: number;
}

export default function Detail({
  subject,
  title,
  user,
  created,
  view_num,
}: IProps) {
  return (
    <div className='bg-[rgba(229,229,229,0.08)]'>
      <Layout padding='py-8'>
        <div className='font-bold'>{subject}</div>

        <div className='mt-6 text-lg'>{title}</div>

        <div className='mt-10 flex justify-between'>
          <div className='flex space-x-3.5'>
            <div>
              {user.name}
              {user.grade}
            </div>

            <div className='opacity-60'>
              {created.split('T')[0].slice(0, 10)}
            </div>
          </div>

          <div>조회 {view_num}</div>
        </div>
      </Layout>
    </div>
  );
}
