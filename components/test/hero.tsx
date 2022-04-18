import Image from "next/image";
import heroBg from "public/test/hero-bg.png";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-full w-full">
          <Image
            src={heroBg}
            alt="Hero Section Background Image"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>

      <div className="pt-48 pb-36 text-center">
        <div className="text-[3.75rem] font-bold leading-[4.875rem] tracking-[-1.8px] text-white">
          무턱대고 투자했다 금리인상 여파로
          <br />
          손실만 보고 계신가요?
        </div>
        <button className="mt-[3.75rem] rounded bg-[#282E38] px-[3.75rem] py-5 text-xl text-white">
          노현우 경제전문가와 함께하는 경제독서모임
        </button>
      </div>
    </div>
  );
}
