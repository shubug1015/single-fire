import { cls } from '@libs/client/utils';

interface LayoutProps {
  bgColor?: string;
  bgImg?: string;
  padding?: string;
  children: React.ReactNode;
}

export default function Layout({
  bgColor,
  bgImg,
  padding,
  children,
}: LayoutProps) {
  return (
    <div
      className={cls(
        bgColor ? bgColor : '',
        bgImg ? bgImg : '',
        padding ? padding : '',
        'w-full'
      )}
    >
      <div className='mx-auto w-full max-w-[1180px] md:max-w-[330px]'>
        {children}
      </div>
    </div>
  );
}
