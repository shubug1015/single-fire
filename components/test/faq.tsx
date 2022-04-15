import Layout from "@layouts/sectionLayout";
import TitleBtn from "./titleBtn";

export default function Faq() {
  return (
    <Layout bgColor="bg-[#2C2F34]" padding="pt-[6.25rem] pb-[12.58rem]">
      <div className="text-center">
        <TitleBtn title="FAQ" />
        <div className="mt-6 text-center text-4xl font-bold leading-normal text-white">
          자주 묻는 질문
        </div>
        <div>
          <div className="mt-20 flex items-center justify-between rounded bg-[#4a4e57] px-[3.75rem] py-8">
            <div className="text-xl leading-10 text-white">타이틀</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div className="mt-4 flex justify-between rounded bg-black px-[3.75rem] pt-8 pb-20">
            <div className="w-[58.75rem] text-left text-white">
              <div className="text-xl leading-10">타이틀</div>
              <div className="mt-10 text-base leading-[1.63rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                volutpat lobortis feugiat. Integer mollis, nulla vitae faucibus
                varius, sem eros mattis nibh, eu ultricies tortor neque id diam.
                Praesent interdum laoreet purus, vel porta nisi iaculis sed.
                Nunc aliquam consequat condimentum. Morbi pretium ornare lectus.
                Proin aliquam pulvinar vehicula. Donec ac sem sed massa auctor
                venenatis vel quis dolor. Etiam a vestibulum dolor. Duis et
                tellus pharetra, lacinia risus vitae, porta nulla. Nam viverra
                malesuada mattis. Pellentesque quis sagittis mi, vitae finibus
                urna.
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 12H4"
              />
            </svg>
          </div>
          <div className="mt-4 flex items-center justify-between rounded bg-[#4a4e57] px-[3.75rem] py-8">
            <div className="text-xl leading-10 text-white">타이틀</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>

        <div className="mt-[10rem] inline-block rounded-full border border-[#00E7FF] px-[1.375rem] py-[0.625rem] text-base font-bold text-[#00E7FF]">
          Membership
        </div>
        <div className="mt-6 text-4xl font-bold leading-normal text-white">
          <span className="text-[#00e7ff]">최소한의 가격</span>으로 평생 써먹을
        </div>
        <div className="mt-[0.625rem] text-5xl font-bold leading-normal text-white">
          경제를 보는 안목을 길러드립니다
        </div>

        <div className="mt-[7.581rem] h-[358px] w-[1174px] bg-slate-500" />
        <div className="mt-[7.661rem] h-[358px] w-[1174px] bg-slate-500" />
      </div>
    </Layout>
  );
}
