interface IProps {
  title: string;
}

export default function TitleBtn({ title }: IProps) {
  return (
    <div className="inline-block rounded-full border border-[#00E7FF] px-[1.375rem] py-[0.625rem] font-bold text-[#00E7FF]">
      {title}
    </div>
  );
}
