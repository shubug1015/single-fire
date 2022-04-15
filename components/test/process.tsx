import TitleBtn from "./titleBtn";

export default function Process() {
  const processList = [
    {
      id: 0,
      content:
        "게시판과 오픈채팅방에 입장해 전문가와 운영자의 안내에 따라 스터디 시작",
    },
    {
      id: 1,
      content:
        "리스트에 있는 책을 2주에 한 권씩 차례로 함께 읽고 궁금한 점을 경제 전문가에게 질문",
    },
    {
      id: 2,
      content:
        "멤버들은 매일 게시판에 들어와 출석체크를 하고 자신이 읽은 파트에 대한 글 작성",
    },
    {
      id: 3,
      content:
        "4주에 한 번씩 경제전문가가 주최하는 온/오프라인 세미나에 참석해 경제 특강을 듣고 멤버들과 소통",
    },
    {
      id: 4,
      content:
        "전체 챌린지는 3개월마다 한번씩 새로 리셋되며, 멤버들은 1개월 혹은 3개월 기간을 택해 멤버가 될 수 있다.",
    },
  ];
  return (
    <div className="bg-[#2c2f34] pt-[6.25rem] pb-[7.5rem]">
      <div className="mx-auto w-full max-w-[1322px] text-center">
        <TitleBtn title="Process" />
        <div className="mt-6 text-4xl font-bold leading-normal text-white">
          시간은 최대한 아끼고, <span className="text-[#00e7ff]">핵심</span>만
          깊게 배울수 있도록
        </div>
        <div className="mt-2.5 text-5xl font-bold leading-normal text-white">
          <span className="text-[#00e7ff]">경제 독서모임 운영방식</span>을
          소개합니다
        </div>

        <div className="mt-[6.25rem] space-y-4">
          {processList.map((process) => (
            <div className="flex items-center rounded bg-[#4a4E57] px-[5.479rem] py-[3.125rem]">
              <div className="h-16 w-16 bg-slate-400" />
              <div className="ml-[3.8rem] flex h-20 items-center border-l-[0.125rem] border-l-[#ffffff13] pl-10 text-left text-2xl font-medium text-white">
                {process.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded bg-black py-8">
          <div className="text-xl font-medium text-white">
            <span className="h-2 w-2">🎁</span> 매달 챌린지를 성공적으로
            마무리한 멤버에게 밀머스에서 제작한 고급 책갈피 굿즈를 선물로
            배송드립니다.
          </div>
        </div>
      </div>
    </div>
  );
}
