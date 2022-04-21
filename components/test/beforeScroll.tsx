export default function BeforeScroll() {
  const beforeScrollList = [
    {
      id: 0,
      icon: '📈',
      content:
        '금리인상, 인플레이션 등 경제뉴스가 쏟아지지만 투자에 제대로 활용하지 못하시는 분',
    },
    {
      id: 1,
      icon: '💧',
      content:
        '어렴풋이 들은 투자정보로 어렵게 모은 종잣돈을 투자했지만 실패하신분',
    },
    {
      id: 2,
      icon: '💰',
      content: '투자를 진행하면서 투자리스크를 최대한 낮추고 싶으신분',
    },
  ];

  return (
    <div className='bg-[#373C46] py-[7.5rem]'>
      <div className='mx-auto w-full max-w-[1340px] text-center'>
        <div className='inline bg-[#00E7FF] text-[2rem] font-bold text-[#282e38]'>
          스크롤 하기 전에!
        </div>
        <div className='mt-3 text-4xl font-bold leading-normal text-white'>
          이런 상황을 겪은 분이라면{' '}
          <span className='text-[#00E7FF]'>정말 효과적인 내용</span>일 것입니다.
        </div>

        <div className='mt-20 grid grid-cols-3 gap-x-10 text-left'>
          {beforeScrollList.map((beforeScroll) => (
            <div
              key={beforeScroll.id}
              className='rounded-[20px] bg-[#4A4E57] px-[3.75rem] py-[3.25rem]'
            >
              <div className='text-[2.5rem]'>{beforeScroll.icon}</div>
              <div className='mt-8 text-xl font-medium leading-8 text-white'>
                {beforeScroll.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
