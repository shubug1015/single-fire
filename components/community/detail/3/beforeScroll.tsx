import { cls } from '@libs/client/utils';

interface IProps {
  clsFilter: (cls1: string, cls2: string, cls3: string, cls4: string) => string;
}

export default function BeforeScroll({ clsFilter }: IProps) {
  const beforeScrollList = [
    {
      id: 0,
      icon: '📈',
      content:
        '꿈꾸는 것들은 많은데 구체적이고 명확한 목표를 세우는 데 어려움을 느끼는 분',
    },
    {
      id: 1,
      icon: '💧',
      content:
        '꾸준히 반복실행하는 법을 몰라 항상 이야기한 것을 지키지 못하고 좌절하는 분',
    },
    {
      id: 2,
      icon: '💰',
      content:
        '목표기간 내 빠르게 성장하고 싶은데 혼자서는 스스로를 잘 컨트롤하지 못하는 분',
    },
  ];

  return (
    <div className='bg-[#373C46] py-[7.5rem] text-white md:py-10'>
      <div className='mx-auto w-full max-w-[1340px] text-center md:max-w-[330px]'>
        <div
          className={cls(
            clsFilter(
              'bg-[#00e7ff]',
              'bg-[#a966ff]',
              'bg-[#a2ff69]',
              'bg-[#ff8a00]'
            ),
            'inline text-[2rem] font-bold text-[#282e38] md:text-base'
          )}
        >
          &nbsp;스크롤 하기 전에!&nbsp;
        </div>
        <div className='mt-3 text-4xl font-bold leading-normal md:mt-2 md:text-lg'>
          이런 상황을 겪은 분이라면 <br className='hidden md:block' />
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
            독서모임 참여
          </span>
          를 적극 권합니다.
        </div>

        <div className='mt-20 grid grid-cols-3 gap-x-10 text-left md:mt-8 md:gap-x-[17rem] md:overflow-scroll'>
          {beforeScrollList.map((beforeScroll) => (
            <div
              key={beforeScroll.id}
              className='rounded-[20px] bg-[#4A4E57] px-[3.75rem] py-[3.25rem] md:w-64 md:p-6'
            >
              <div className='text-[2.5rem] md:text-2xl'>
                {beforeScroll.icon}
              </div>
              <div className='mt-8 text-xl font-medium leading-8 text-white md:mt-6 md:whitespace-pre-wrap md:text-sm'>
                {beforeScroll.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
