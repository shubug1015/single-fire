import Banner from '@components/home/banner';
import Best from '@components/home/best';
import Community from '@components/home/community';
import Customized from '@components/home/customized';
import Popup from '@components/home/popup';
import Top3 from '@components/home/top3';
// import SEO from '@components/seo';
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
        <title>밀레니얼머니스쿨 - 실전 고수와 함께 성장하는 재미</title>
        <meta
          name='description'
          content='부동산, 주식, 코인, 온라인창업. 투자고수의 찐 노하우를 담은 고퀄리티 온라인 클래스와 오프라인 커뮤니티가 있는 밀머스에서 제대로 성장하세요!'
        />
        <meta
          property='og:title'
          content='밀레니얼머니스쿨 - 실전 고수와 함께 성장하는 재미'
        />
        <meta
          property='og:description'
          content='부동산, 주식, 코인, 온라인창업. 투자고수의 찐 노하우를 담은 고퀄리티 온라인 클래스와 오프라인 커뮤니티가 있는 밀머스에서 제대로 성장하세요!'
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
