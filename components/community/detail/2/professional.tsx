import Layout from '@layouts/sectionLayout';
import TitleBtn from './titleBtn';
import Image from 'next/image';
import ProfessioanalProfile from 'public/test/2-professional-profile.jpg';
import { cls } from '@libs/client/utils';

interface IProps {
  clsFilter: (cls1: string, cls2: string, cls3: string, cls4: string) => string;
}

export default function Professional({ clsFilter }: IProps) {
  return (
    <Layout bgColor='bg-[#2C2F34]' padding='py-[6.25rem] md:py-10'>
      <div className='text-center font-bold text-white'>
        {/* <TitleBtn title='Professional' /> */}
        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'inline-block rounded-full border px-5 py-2 md:px-4 md:text-sm'
          )}
        >
          Professional
        </div>

        <div className='mt-6 text-4xl leading-normal md:mt-2 md:text-lg'>
          한 번 배우면 남들보다 앞서가는 <br className='hidden md:block' />
          <span
            className={cls(
              clsFilter(
                'text-[#00e7ff]',
                'text-[#a966ff]',
                'text-[#a2ff69]',
                'text-[#ff8a00]'
              ),
              ''
            )}
          >
            투자자
          </span>
          로 성장할 수 있습니다.
        </div>
        <div className='mt-20 flex space-x-10 md:block md:space-x-0'>
          <div className='relative h-[24.688rem] w-[39.063rem] md:h-64 md:w-full'>
            <Image
              src={ProfessioanalProfile}
              alt='Professional Section Profile Image'
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              quality={100}
              className='rounded'
            />
          </div>

          <div className='rounded bg-[#373C46] p-10 text-left md:mt-2 md:p-6'>
            <div className='border-b-[0.125rem] border-b-[#505766] pb-8 text-[1.625rem] font-bold md:pb-4 md:text-xl'>
              임동민 이코노미스트
            </div>
            <div className='mt-6 text-lg font-medium leading-[2.215rem] md:text-sm md:font-normal'>
              • 현 교보증권 이코노미스트
              <br />
              • 비트코인, 이더리움 가치투자자
              <br />• &lt;NFT 투자의 정석&gt;, &lt;앞으로 10년 세상을 바꿀
              거대한 변화 7가지&gt; 저자
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
