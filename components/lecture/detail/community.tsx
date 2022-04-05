import Layout from '@layouts/sectionLayout';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  data: any[];
}

export default function Community({ data }: IProps) {
  return (
    <Layout bgColor='#282e38' padding='pb-80'>
      <div className='flex w-full space-x-5'>
        <div className='w-[30rem] rounded bg-[#373c46] p-10'>
          <div className='font-bold'>강사소개</div>

          <div className='mt-10 text-xl font-medium'>홍길동</div>
          <div className='mt-2 text-[#cfcfcf]'>
            수익률 20% 달성하는 주식 투자 전략
          </div>
          <div className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dignissim pellentesque diam
          </div>

          <div className='mt-10 text-lg font-medium'>상세 이력</div>
          <div className='mt-4 text-[#cfcfcf]'>
            <div className='flex items-center'>
              <span className='mr-2 text-2xl'>·</span>
              <span>Lorem ipsum dolor</span>
            </div>
          </div>

          <div className='mt-10 text-lg font-medium'>SNS</div>
          <div className='mt-4 flex space-x-3'>
            <div className='aspect-square w-8 rounded-md bg-blue-500'></div>
          </div>
        </div>

        <div className='flex w-[42.625rem] flex-col justify-between rounded bg-[#373c46] p-10'>
          <div>
            <div className='font-bold'>커뮤니티</div>

            <div className='mt-10 whitespace-pre-wrap'>
              금리인상, 인플레이션 등 경제뉴스가 쏟아지지만 단편적인 지식 말고
              그 의미를 제대로 알고 투자에 활용하는 사람은 드물다.
              <br />
              <br />
              어렴풋이 아는 채로 어렵게 모은 종잣돈을 덥석 투자하면 실패하기
              쉽다. 투자 리스크를 줄이려면 경제 흐름을 제대로 아는 게 핵심이다.
              경제 공부, 혼자 하면 어렵고 지겹고 제자리이지만 경제전문가와
              함께하면 쉽게, 빠르게, 제대로 할 수 있다!
              <br />
              <br />한 번 배워서 평생 써먹는 경제 공부, 시간과 돈이 전혀 아깝지
              않은 나를 위한 투자는 이렇게 하는 것이다!
            </div>
          </div>

          <div className='flex justify-end'>
            <Link href={`/community/`}>
              <a>
                <div className='flex h-14 w-48 items-center justify-center rounded bg-[#00e7ff] text-[#282e38] transition-all hover:opacity-90'>
                  커뮤니티 바로가기 →
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
