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
        '금리인상, 인플레이션 등\n경제뉴스가 쏟아지지만 투자에\n제대로 활용하지 못하시는 분',
    },
    {
      id: 1,
      icon: '💧',
      content:
        '어렴풋이 들은 투자정보로\n어렵게 모은 종잣돈을 투자했지만\n실패하신분',
    },
    {
      id: 2,
      icon: '💰',
      content: '투자를 진행하면서\n투자리스크를 최대한 낮추고\n싶으신분',
    },
  ];

  return (
    <div className='bg-[#373C46] py-[7.5rem] text-white md:py-10'>
      <div className='mx-auto w-full max-w-[1340px] text-center'>
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
            정말 효과적인 내용
          </span>
          일 것입니다.
        </div>

        <div className='mt-20 grid grid-cols-3 gap-x-10 text-left md:mt-8 md:grid-cols-1'>
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
