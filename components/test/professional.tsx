import Layout from "@layouts/sectionLayout";
import TitleBtn from "./titleBtn";

export default function Professional() {
  return (
    <Layout bgColor="bg-[#2C2F34]" padding="py-[6.25rem]">
      <div className="text-center">
        <TitleBtn title="Professional" />
        <div className="mt-6 text-4xl font-bold leading-normal text-white">
          한번 배우면 평생 쓸 수 있는{" "}
          <span className="text-[#00E7FF]">경제지식</span> 전수하겠습니다
        </div>
        <div className="mt-20 flex space-x-10">
          <div className="h-[24.688rem] w-[39.063rem] bg-slate-500" />
          <div className="bg-[#373C46] p-10 text-left text-white">
            <div className="border-b-[0.125rem] border-b-[#505766] pb-8 text-[1.625rem] font-bold">
              노현우 경제전문가
            </div>
            <div className="mt-6 text-[1.125rem] font-medium leading-[2.215rem]">
              • 연세대 국제금융 석사
              <br />
              • 전 연합인포맥스 기획재정부·한국은행 출입기자
              <br />
              • 현 대형자산운용사 채권전략가
              <br />• 거시경제, 금융시장에 대한 폭넓은 시야와 경험을 가진
              경제전문가
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
