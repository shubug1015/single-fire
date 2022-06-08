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
        '남들은 코인 투자로 큰 돈을 벌었다는데 무서워서 막연한 호기심만 가지고 있는 분',
    },
    {
      id: 1,
      icon: '💧',
      content:
        '새로 열리는 세상을 남들보다 빠르게 경험하고 싶은데 혼자선 자신이 없는 분',
    },
    {
      id: 2,
      icon: '💰',
      content:
        '내 미래를 바꿀 수 있는 새로운 자산에 투자하기 전에 제대로 공부하고 싶은 분',
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
          이제 막 새로운 투자에 눈뜬
          <br className='hidden md:block' />
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
            {' '}
            이런 분
          </span>
          들, 적극 환영합니다!
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
