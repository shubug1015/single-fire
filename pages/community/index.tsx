import SEO from '@components/seo';
import { getToken, setToken } from '@libs/token';
import type { GetServerSideProps, NextPage } from 'next';
import Ecomony from '@public/community/ecomony.png';
import Nft from '@public/community/Nft.png';
import Stock from '@public/community/Stock.png';
import Coin from '@public/community/Coin.png';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  token: string | null;
}

const Community: NextPage<IProps> = ({ token }) => {
  setToken({ token });

  const communityList = [
    {
      id: 0,
      type: '정기상품',
      subtitle: '노현우 경제전문가와 함께하는,',
      title: '경제독서모임',
      image: Ecomony,
      text: '금리인상, 인플레이션 등 경제뉴스가 쏟아지지만 단편적인 지식 말고 그 의미를 제대로 알고 투자에 활용하는 사람은 드물다.\n\n어렴풋이 아는 채로 어렵게 모은 종잣돈을 덥석 투자하면 실패하기 쉽다. 투자 리스크를 줄이려면 경제 흐름을 제대로 아는 게 핵심이다. 경제 공부, 혼자 하면 어렵고 지겹고 제자리이지만 경제전문가와 함께하면 쉽게, 빠르게, 제대로 할 수 있다!\n\n한 번 배워서 평생 써먹는 경제 공부, 시간과 돈이 전혀 아깝지 않은 나를 위한 투자는 이렇게 하는 것이다!',
      url: '/community/economy/1/created/title',
    },
    {
      id: 1,
      type: '정기상품',
      subtitle: '임동민 이코노미스트와 함께 배우는,',
      title: 'NFT 마스터 스터디',
      image: Nft,
      text: '금리인상, 인플레이션 등 경제뉴스가 쏟아지지만 단편적인 지식 말고 그 의미를 제대로 알고 투자에 활용하는 사람은 드물다.\n\n어렴풋이 아는 채로 어렵게 모은 종잣돈을 덥석 투자하면 실패하기 쉽다. 투자 리스크를 줄이려면 경제 흐름을 제대로 아는 게 핵심이다. 경제 공부, 혼자 하면 어렵고 지겹고 제자리이지만 경제전문가와 함께하면 쉽게, 빠르게, 제대로 할 수 있다!\n\n한 번 배워서 평생 써먹는 경제 공부, 시간과 돈이 전혀 아깝지 않은 나를 위한 투자는 이렇게 하는 것이다!',
      url: '/community/nft/1',
    },
    {
      id: 2,
      type: '정기상품',
      subtitle: '경제적 자유를 위한,',
      title: '주식투자',
      image: Stock,
      text: '금리인상, 인플레이션 등 경제뉴스가 쏟아지지만 단편적인 지식 말고 그 의미를 제대로 알고 투자에 활용하는 사람은 드물다.\n\n어렴풋이 아는 채로 어렵게 모은 종잣돈을 덥석 투자하면 실패하기 쉽다. 투자 리스크를 줄이려면 경제 흐름을 제대로 아는 게 핵심이다. 경제 공부, 혼자 하면 어렵고 지겹고 제자리이지만 경제전문가와 함께하면 쉽게, 빠르게, 제대로 할 수 있다!\n\n한 번 배워서 평생 써먹는 경제 공부, 시간과 돈이 전혀 아깝지 않은 나를 위한 투자는 이렇게 하는 것이다!',
      url: '/community/stock/1',
    },
    {
      id: 3,
      type: '정기상품',
      subtitle: '나민영의 경제적 자유를 이루는,',
      title: '코인 트레이닝 노하우',
      image: Coin,
      text: '금리인상, 인플레이션 등 경제뉴스가 쏟아지지만 단편적인 지식 말고 그 의미를 제대로 알고 투자에 활용하는 사람은 드물다.\n\n어렴풋이 아는 채로 어렵게 모은 종잣돈을 덥석 투자하면 실패하기 쉽다. 투자 리스크를 줄이려면 경제 흐름을 제대로 아는 게 핵심이다. 경제 공부, 혼자 하면 어렵고 지겹고 제자리이지만 경제전문가와 함께하면 쉽게, 빠르게, 제대로 할 수 있다!\n\n한 번 배워서 평생 써먹는 경제 공부, 시간과 돈이 전혀 아깝지 않은 나를 위한 투자는 이렇게 하는 것이다!',
      url: '/community/coin/1',
    },
  ];

  return (
    <>
      <SEO title='커뮤니티' />
      <div className='grid w-screen grid-cols-4'>
        {communityList.map((i) => (
          <div key={i.id}>
            <div className='flex flex-col items-center bg-[#373c46] pt-12 pb-44'>
              <div className='rounded-full border border-[#00e7ff] py-2 px-4 text-sm text-[#00e7ff]'>
                {i.type}
              </div>

              <div className='mt-6 text-lg font-bold'>{i.subtitle}</div>

              <div className='text-[2.5rem] font-bold'>{i.title}</div>

              <div className='relative mt-16 aspect-square w-40'>
                <Image
                  src={i.image}
                  alt='Community Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>

            <div className='flex flex-col items-center px-7 pb-7'>
              <div className='-mt-24 whitespace-pre-wrap rounded-3xl bg-[#4a4e57] p-8 font-medium'>
                {i.text}
              </div>

              <Link href={i.url}>
                <a className='w-full'>
                  <div className='mt-5 flex h-14 w-full items-center justify-center rounded-xl bg-[#00e7ff] font-medium text-[#282e38] transition-all hover:opacity-90'>
                    입장하기
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getToken(ctx);
};

export default Community;
