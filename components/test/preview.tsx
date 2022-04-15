import Layout from "@layouts/sectionLayout";
import TitleBtn from "./titleBtn";

export default function Preview() {
  const previewList = [
    {
      id: 0,
      title: "제목",
      author: "작가",
    },
    {
      id: 1,
      title: "제목",
      author: "작가",
    },
    {
      id: 2,
      title: "제목",
      author: "작가",
    },
    {
      id: 3,
      title: "제목",
      author: "작가",
    },
    {
      id: 4,
      title: "제목",
      author: "작가",
    },
    {
      id: 5,
      title: "제목",
      author: "작가",
    },
  ];
  return (
    <Layout bgColor="bg-[#373c46]" padding="py-[6.25rem]">
      <div className="text-center">
        <TitleBtn title="Preview" />
        <div className="mt-6 text-center text-4xl font-bold leading-normal text-white">
          2주에 1번씩 여러분과 함께할 경제도서입니다.
        </div>
        <div className="mt-20 flex flex-col items-center rounded-[20px] bg-[#282e38] py-10">
          <div className="h-[1.563rem] w-[9.188rem] bg-slate-400" />
          <div className="mt-8 text-xl leading-normal text-white">
            “혼자서는 손이 가지 않는 책들, 같이 읽으면 진짜 내 것이 된다”
          </div>
          <div className="mt-4 text-xl leading-normal text-white">
            “이 책들만 읽어도 경제흐름 제대로 읽고 투자하는 기본기가 쌓인다”
          </div>
          <div className="mt-4 text-xl leading-normal text-white">
            “어디가서도 꿀리지 않을 경제를 읽는 눈을 가질 수 있는 책들”
          </div>
        </div>

        <div className="mt-[6.25rem] grid grid-cols-3 grid-rows-2 gap-x-[8.75rem] gap-y-[3.75rem]">
          {previewList.map((preview) => (
            <div>
              <div className="h-[27.563rem] w-[18.75rem] rounded bg-[#2c3038] shadow-2xl"></div>
              <div className="mt-4 text-xl text-white">{preview.title}</div>
              <div className="mt-1 text-base text-white">{preview.author}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
