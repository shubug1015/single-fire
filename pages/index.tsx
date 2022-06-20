import Banner from '@components/home/banner';
import Best from '@components/home/best';
import Community from '@components/home/community';
import Customized from '@components/home/customized';
import Popup from '@components/home/popup';
import Top3 from '@components/home/top3';
import SEO from '@components/seo';
import { lecturesApi } from '@libs/api';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

// interface IFallback {
//   data: any[];
// }

const Home: NextPage = () => {
  const { data } = useSWR('/cms/main', () => lecturesApi.mainLectureList());
  const [popup, setPopup] = useState(false);

  const closePopup = () => {
    setPopup(false);
    sessionStorage.setItem('popup', 'false');
  };

  useEffect(() => {
    const popupState = sessionStorage.getItem('popup');
    if (!popupState) {
      setPopup(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>밀레니얼머니스쿨 - 밀머스, 경제적자유를 꿈꾸는 공간</title>
        <meta
          name='description'
          content='아직도 직장에서 스트레스 받고 계시나요? 아직도 투자에 ㅌ자도 모르시나요? 밀레니얼 머니스쿨은 그런분들을 위해 준비했습니다. 이제는 평생 직장이 아닌 경제적 자유를 위해 준비해야합니다. 여러분의 새로운 도전의 날개가 되어드리겠습니다.'
        />
        <meta
          property='og:title'
          content='밀레니얼머니스쿨 - 밀머스, 경제적자유를 꿈꾸는 공간'
        />
        <meta
          property='og:description'
          content='아직도 직장에서 스트레스 받고 계시나요? 아직도 투자에 ㅌ자도 모르시나요? 밀레니얼 머니스쿨은 그런분들을 위해 준비했습니다. 이제는 평생 직장이 아닌 경제적 자유를 위해 준비해야합니다. 여러분의 새로운 도전의 날개가 되어드리겠습니다.'
        />
      </Head>

      <Banner data={data?.main_banner} />
      <Best
        data={data?.best_class.map((i: { [key: string]: any }) => i.lecture)}
      />
      <Customized data={data?.custom_class} />
      <Top3
        realty={data?.realty_class.map(
          (i: { [key: string]: any }) => i.lecture
        )}
        stock={data?.stock_class.map((i: { [key: string]: any }) => i.lecture)}
        coin={data?.coin_class.map((i: { [key: string]: any }) => i.lecture)}
      />
      <Community />

      {popup && <Popup closePopup={closePopup} />}
    </>
  );
};

export default Home;
