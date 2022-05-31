import TopLectureList from '@components/topLectureList';
import Layout from '@layouts/sectionLayout';

interface IProps {
  realty: any[];
  stock: any[];
  coin: any[];
}

export default function Top3({ realty, stock, coin }: IProps) {
  return (
    <Layout padding='py-24'>
      <div className='space-y-28'>
        {/* 부동산 Top3 강의 */}
        <TopLectureList
          title='부동산 TOP3 강의'
          data={realty}
          url='/class/real-estate'
        />
        {/* 부동산 Top3 강의 */}

        {/* 주식 Top3 강의 */}
        <TopLectureList
          title='주식 TOP3 강의'
          data={stock}
          url='/class/stock'
        />
        {/* 주식 Top3 강의 */}

        {/* 코인 Top3 강의 */}
        <TopLectureList title='코인 TOP3 강의' data={coin} url='/class/coin' />
        {/* 코인 Top3 강의 */}
      </div>
    </Layout>
  );
}
