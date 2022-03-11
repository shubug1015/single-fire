import { cls } from '@libs/utils';

interface LayoutProps {
  bgColor: string;
  bgImg?: string;
  padding: string;
  children: React.ReactNode;
}

export default function Layout({
  bgColor,
  bgImg,
  padding,
  children,
}: LayoutProps) {
  return (
    <div className={cls(bgColor, bgImg ? bgImg : '', padding, 'w-full')}>
      <div className='mx-auto w-full max-w-[1180px]'>{children}</div>
    </div>
  );
}
