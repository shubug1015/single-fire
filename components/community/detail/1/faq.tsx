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
      title: '타이틀1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat lobortis feugiat. Integer mollis, nulla vitae faucibus varius, sem eros mattis nibh, eu ultricies tortor neque id diam. Praesent interdum laoreet purus, vel porta nisi iaculis sed. Nunc aliquam consequat condimentum. Morbi pretium ornare lectus. Proin aliquam pulvinar vehicula. Donec ac sem sed massa auctor venenatis vel quis dolor. Etiam a vestibulum dolor. Duis et tellus pharetra, lacinia risus vitae, porta nulla. Nam viverra malesuada mattis. Pellentesque quis sagittis mi, vitae finibus urna.',
    },
    {
      id: 1,
      title: '타이틀2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat lobortis feugiat. Integer mollis, nulla vitae faucibus varius, sem eros mattis nibh, eu ultricies tortor neque id diam. Praesent interdum laoreet purus, vel porta nisi iaculis sed. Nunc aliquam consequat condimentum. Morbi pretium ornare lectus. Proin aliquam pulvinar vehicula. Donec ac sem sed massa auctor venenatis vel quis dolor. Etiam a vestibulum dolor. Duis et tellus pharetra, lacinia risus vitae, porta nulla. Nam viverra malesuada mattis. Pellentesque quis sagittis mi, vitae finibus urna.',
    },
    {
      id: 2,
      title: '타이틀3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat lobortis feugiat. Integer mollis, nulla vitae faucibus varius, sem eros mattis nibh, eu ultricies tortor neque id diam. Praesent interdum laoreet purus, vel porta nisi iaculis sed. Nunc aliquam consequat condimentum. Morbi pretium ornare lectus. Proin aliquam pulvinar vehicula. Donec ac sem sed massa auctor venenatis vel quis dolor. Etiam a vestibulum dolor. Duis et tellus pharetra, lacinia risus vitae, porta nulla. Nam viverra malesuada mattis. Pellentesque quis sagittis mi, vitae finibus urna.',
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
                <div className='text-xl leading-10'>{faq.title}</div>
                {faq.id === openedFaq && (
                  <div className='mt-10 pb-12 text-base leading-[1.63rem] md:pb-6 md:font-normal'>
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
          경제를 보는 안목을 길러드립니다
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
