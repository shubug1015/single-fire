import TopLectureList from '@components/topLectureList';
import Layout from '@layouts/sectionLayout';

interface IProps {
  coin: any[];
  realty: any[];
  stock: any[];
}

export default function Top3({ coin, realty, stock }: IProps) {
  return (
    <Layout bgColor='#282e38' padding='py-24'>
      <div className='space-y-28'>
        {/* 코인 Top3 강의 */}
        <TopLectureList title='코인 TOP3 강의' data={coin} url='/class/coin' />
        {/* 코인 Top3 강의 */}

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
      </div>
    </Layout>
  );
}
