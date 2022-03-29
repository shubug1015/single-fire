import { cls } from '@libs/utils';
import React from 'react';

interface IProps {
  label: string;
  type: 'text' | 'tel';
  placeholder: string;
  value: string;
  kind: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>, kind: string) => void;
  sendCode?: () => void;
}

export default function Input({
  label,
  type,
  placeholder,
  value,
  kind,
  handleInput,
  sendCode,
}: IProps) {
  return (
    <div className='flex w-full flex-col'>
      <label className='font-medium'>{label}</label>

      <div className='mt-2 flex h-[3.75rem] w-full justify-between'>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInput(e, kind)}
          className={cls(
            label === '전화번호' ? 'w-[calc(100%-8.5rem)]' : 'w-full',
            'h-full rounded border border-[rgba(255,255,255,0.38)] bg-transparent pl-4 outline-none'
          )}
        />

        {label === '전화번호' && (
          <div
            onClick={sendCode}
            className='ml-4 flex h-full w-[7.5rem] cursor-pointer items-center justify-center rounded border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.12)] transition-all hover:opacity-70'
          >
            인증번호 전송
          </div>
        )}
      </div>
    </div>
  );
}
