import Image from 'next/image';
import TitleBtn from './titleBtn';
import ProcessIcon1 from 'public/test/process-icon1.png';
import ProcessIcon2 from 'public/test/process-icon2.png';
import ProcessIcon3 from 'public/test/process-icon3.png';
import ProcessIcon4 from 'public/test/process-icon4.png';
import ProcessIcon5 from 'public/test/process-icon5.png';
import { cls } from '@libs/client/utils';

interface IProps {
  clsFilter: (cls1: string, cls2: string, cls3: string, cls4: string) => string;
}

export default function Process({ clsFilter }: IProps) {
  const processList = [
    {
      id: 0,
      image: (
        <Image
          src={ProcessIcon1}
          alt='Process Section First Icon'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      content:
        '게시판과 오픈채팅방에 입장해 전문가와 운영자의 안내에 따라 스터디 시작',
    },
    {
      id: 1,
      image: (
        <Image
          src={ProcessIcon2}
          alt='Process Section Second Icon'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      content:
        '리스트에 있는 매주 수행할 미션을 확인하고 가이드에 따라 하나씩 도전',
    },
    {
      id: 2,
      image: (
        <Image
          src={ProcessIcon3}
          alt='Process Section Third Icon'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      content:
        '멤버들이 매일 게시판에 들어와 출석체크를 하고 정해진 미션의 기록을 남기는 방식',
    },
    {
      id: 3,
      image: (
        <Image
          src={ProcessIcon4}
          alt='Process Section Fourth Icon'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      content:
        '2주에 한 번씩 전문가가 주최하는 온/오프라인 세미나에 참석해 특강을 듣고 멤버들과 소통',
    },
    {
      id: 4,
      image: (
        <Image
          src={ProcessIcon5}
          alt='Process Section Fifth Icon'
          objectFit='cover'
          placeholder='blur'
          quality={100}
        />
      ),
      content:
        '전체 챌린지는 3개월마다 한 번씩 새로 리셋되며, 멤버들은 1개월 혹은 3개월 기간을 택해 멤버로 활동',
    },
  ];
  return (
    <div className='bg-[#2c2f34] pt-[6.25rem] pb-[7.5rem] md:py-10'>
      <div className='mx-auto w-full max-w-[1322px] text-center font-bold text-white md:max-w-[330px]'>
        {/* <TitleBtn title='Process' /> */}
        <div
          className={cls(
            clsFilter(
              'border-[#00e7ff] text-[#00e7ff]',
              'border-[#a966ff] text-[#a966ff]',
              'border-[#a2ff69] text-[#a2ff69]',
              'border-[#ff8a00] text-[#ff8a00]'
            ),
            'inline-block rounded-full border px-[1.375rem] py-[0.625rem] md:px-4 md:text-sm'
          )}
        >
          Process
        </div>

        <div className='mt-6 text-4xl leading-normal md:mt-2 md:text-sm'>
          성장하고 꿈을 이뤄가는 삶을 살고 싶은 분들을 위한
        </div>
        <div className='mt-2.5 text-5xl leading-normal md:mt-[0.125rem] md:text-lg'>
          <span
            className={clsFilter(
              'text-[#00e7ff]',
              'text-[#a966ff]',
              'text-[#a2ff69]',
              'text-[#ff8a00]'
            )}
          >
            스터디 모임 운영방식
          </span>
          을 소개합니다.
        </div>

        <div className='mt-[6.25rem] space-y-4 md:mt-10 md:space-y-2'>
          {processList.map((process) => (
            <div
              key={process.id}
              className='flex items-center rounded bg-[#4a4E57] px-[5.479rem] py-[3.125rem] md:p-6'
            >
              <div>{process.image}</div>
              <div className='ml-[3.8rem] flex h-20 items-center border-l-[0.125rem] border-l-[#ffffff13] pl-10 text-left text-2xl font-medium text-white md:ml-4 md:h-8 md:pl-4 md:text-sm'>
                {process.content}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-4 rounded bg-black py-8 md:mt-2 md:p-6'>
          <div className='text-xl font-medium text-white md:text-sm'>
            <span className='h-2 w-2'>🎁</span> *매달 챌린지를 성공적으로
            마무리한 멤버에게 밀머스에서 제작한 멤버 전용 굿즈를 선물로
            배송드립니다!
          </div>
        </div>
      </div>
    </div>
  );
}
