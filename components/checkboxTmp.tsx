import { cls } from '@libs/client/utils';
import React from 'react';

interface IProps {
  kind: string;
  checked?: boolean | number;
  handleCheckbox: (
    e: React.ChangeEvent<HTMLInputElement>,
    kind: string
  ) => void;
  children: React.ReactNode;
}

export default function Checkbox({
  kind,
  checked,
  handleCheckbox,
  children,
}: IProps) {
  return (
    <div className='flex w-full items-center'>
      <input
        type='checkbox'
        onChange={(e) => handleCheckbox(e, kind)}
        className={cls(
          checked || checked === -1 || kind === 'marketing'
            ? 'border-[rgba(255,255,255,0.38)]'
            : 'border-red-500',
          'mr-2.5 h-4 w-4 cursor-pointer appearance-none rounded-sm border bg-cover bg-center transition-all checked:border-none checked:bg-[url("/icons/check.png")]'
        )}
      />
      {children}
    </div>
  );
}
