import Layout from '@layouts/sectionLayout';
import { cls } from '@libs/client/utils';
import Image from 'next/image';
import { useState } from 'react';
import TitleBtn from './titleBtn';
import MembershipTicket1 from 'public/test/membership-ticket1.png';
import MembershipTicket2 from 'public/test/membership-ticket2.png';

interface IProps {
  clsFilter: (cls1: string, cls2: string, cls3: string, cls4: string) => string;
}

export default function Faq({ clsFilter }: IProps) {
  const faqList = [
    {
      id: 0,
      title: '결제 후 시작은 어떻게 하면 될까요?',
      content:
        '이 경제독서모임은 2주에 한 권씩 순서대로 정해진 양서를 읽는 챌린지를 진행하는 방식으로 운영됩니다. 참여하면 모임 호스트의 안내에 따라 해당 책을 준비해 함께 읽기 시작하시고 출석체크와 미션을 진행하시면 됩니다. 개인마다 챌린지 시작 및 종료 시점이 다르며 호스트가 개별 안내를 통해 활동을 가이드해 드립니다.',
    },
    {
      id: 1,
      title: '이미 읽은 책이 포함돼 있을 경우는 어떻게 하나요?',
      content:
        '이 경제독서모임은 한 번 읽고 끝낼 책을 읽는 게 아니라 평생에 걸쳐 두고두고 꺼내서 곱씹고 읽어야 할 양서만을 다룹니다. 같은 책도 어떻게 읽고 소화하느냐에 따라 배우고 활용하는 정도가 달라집니다. 기존에 읽은 책이 포함돼 있다 하더라도 가급적 함께 다시 한 번 읽고 미션을 수행하시는 것을 권장드립니다.',
    },
    {
      id: 2,
      title: '함께 읽는 책은 각자가 구매해야 하나요?',
      content:
        '네, 맞습니다. 종이책이든, e북이든 본인이 틈틈히 편하게 읽을 수 있는 방법을 찾아서 책을 확보하고 챌린지에 동참해주시면 됩니다. 국내에 한해 도서를 구하기 어려운 지역에 거주하고 계실 경우 고객센터로 문의주시면 밀머스가 도서 확보를 도와드립니다.',
    },
    {
      id: 3,
      title: '중도에 사정이 생겨 챌린지를 중단해야 할 경우 환불은 가능한가요?',
      content:
        '경제독서모임 특성상 중도하차나 환불은 어려운 점 양해바랍니다. 다만 결제 24시간 이내에 취소나 환불을 요청하시면 100% 환불해 드립니다. 제대로 공부하고 성장하고자 하시는 분들만 신청해주시기 바랍니다.',
    },
  ];
  const [openedFaq, setOpenedFaq] = useState(0);
  const toggleFaq = (id: number) => setOpenedFaq(id);

  return (
    <Layout
      bgColor='bg-[#2C2F34]'
      padding='pt-[6.25rem] pb-[12.58rem] md:py-10'
    >
      <div className='text-center font-bold'>
        {/* <TitleBtn title='FAQ' /> */}
        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'inline-block rounded-full border px-[1.375rem] py-[0.625rem] md:px-4 md:py-2 md:text-sm'
          )}
        >
          FAQ
        </div>

        <div className='mt-6 text-center text-4xl leading-normal text-white md:mt-2 md:text-lg'>
          자주 묻는 질문
        </div>
        <div className='mt-20 md:mt-10'>
          {faqList.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggleFaq(faq.id)}
              className={cls(
                faq.id === openedFaq ? 'bg-black' : 'bg-[#4a4e57]',
                'mt-4 flex cursor-pointer justify-between rounded px-[3.75rem] py-8 md:mt-2 md:px-6 md:py-4'
              )}
            >
              <div className='w-[58.75rem] text-left text-white md:w-full'>
                <div className='text-xl leading-10 md:text-sm'>{faq.title}</div>
                {faq.id === openedFaq && (
                  <div className='mt-10 pb-12 text-base leading-[1.63rem] md:pb-6 md:text-sm md:font-normal'>
                    {faq.content}
                  </div>
                )}
              </div>
              {faq.id === openedFaq ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7 translate-y-[6px] text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20 12H4'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7 translate-y-[6px] text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4v16m8-8H4'
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'mt-[10rem] inline-block rounded-full border px-[1.375rem] py-[0.625rem] text-base font-bold md:mt-10 md:px-4 md:py-2 md:text-sm'
          )}
        >
          Membership
        </div>
        <div className='mt-6 text-4xl font-bold leading-normal text-white md:mt-2 md:text-sm'>
          <span
            className={clsFilter(
              'text-[#00e7ff]',
              'text-[#a966ff]',
              'text-[#a2ff69]',
              'text-[#ff8a00]'
            )}
          >
            최소한의 가격
          </span>
          으로 평생 써먹을
        </div>
        <div className='mt-[0.625rem] text-5xl font-bold leading-normal text-white md:mt-[0.125rem] md:text-lg'>
          새로운 시장을 보는 안목을 길러드립니다{' '}
        </div>
        <div className='md:flex md:justify-center'>
          <div className='relative mt-[120px] h-[358px] w-[1174px] md:mt-10 md:h-[105px] md:w-[343px]'>
            <Image
              src={MembershipTicket1}
              alt='Membership Section First Ticket Image'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
              quality={100}
              className=''
            />
          </div>
        </div>
        <div className='md:flex md:justify-center'>
          <div className='relative mt-[120px] h-[358px] w-[1174px] md:mt-6 md:h-[105px] md:w-[343px]'>
            <Image
              src={MembershipTicket2}
              alt='Membership Section Second Ticket Image'
              objectFit='cover'
              placeholder='blur'
              layout='fill'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
