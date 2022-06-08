import Layout from '@layouts/sectionLayout';
import TitleBtn from './titleBtn';
import Image from 'next/image';
import ProfessioanalProfile from 'public/test/1-professional-profile.jpg';
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
          한번 배우면 평생 써먹을 수 있는 <br className='hidden md:block' />
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
            경제지식
          </span>
          을 함께 스터디합니다.
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
              노현우 경제전문가
            </div>
            <div className='mt-6 text-lg font-medium leading-[2.215rem] md:text-sm md:font-normal'>
              • 연세대 국제금융 석사
              <br />
              • 전 연합인포맥스 기획재정부·한국은행 출입기자
              <br />
              • 현 대형자산운용사 채권전략가
              <br />• 거시경제, 금융시장에 대한 폭넓은 시야와 경험 보유
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
