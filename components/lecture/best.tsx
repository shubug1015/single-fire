import TopLectureList from '@components/topLectureList';
import Layout from '@layouts/sectionLayout';

interface IProps {
  realty_class: any[];
  stock_class: any[];
  coin_class: any[];
  business_class: any[];
}

export default function Best({
  realty_class,
  stock_class,
  coin_class,
  business_class,
}: IProps) {
  return (
    <Layout padding='pt-24 pb-44'>
      <div className='space-y-28'>
        {/* 부동산 Top3 강의 */}
        <TopLectureList
          title='부동산 TOP3 강의'
          data={realty_class?.map((i) => i.lecture)}
          url='/lecture/real-estate/1'
        />
        {/* 부동산 Top3 강의 */}

        {/* 주식 Top3 강의 */}
        <TopLectureList
          title='주식 TOP3 강의'
          data={stock_class?.map((i) => i.lecture)}
          url='/lecture/stock/1'
        />
        {/* 주식 Top3 강의 */}

        {/* 코인 Top3 강의 */}
        <TopLectureList
          title='코인 TOP3 강의'
          data={coin_class?.map((i) => i.lecture)}
          url='/lecture/coin/1'
        />
        {/* 코인 Top3 강의 */}

        {/* 온라인창업 Top3 강의 */}
        <TopLectureList
          title='온라인창업 TOP3 강의'
          data={business_class?.map((i) => i.lecture)}
          url='/lecture/online-business/1'
        />
        {/* 온라인창업 Top3 강의 */}
      </div>
    </Layout>
  );
}
