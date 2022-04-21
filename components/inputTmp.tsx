import { cls } from '@libs/client/utils';
import React from 'react';

interface IProps {
  disabled?: boolean;
  label: string;
  kind: string;
  type: 'text' | 'tel' | 'password';
  value: string;
  checked?: boolean | number;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>, kind: string) => void;
  codeLoading?: boolean;
  sendCode?: () => void;
}

export default function Input({
  disabled,
  label,
  kind,
  type,
  value,
  checked,
  handleInput,
  codeLoading,
  sendCode,
}: IProps) {
  return (
    <div className='flex w-full flex-col'>
      <label className='font-medium'>{label}</label>

      <div className='mt-2 flex h-[3.75rem] w-full justify-between'>
        <input
          disabled={disabled || false}
          type={type}
          placeholder={label}
          value={value}
          onChange={(e) => handleInput(e, kind)}
          className={cls(
            label === '전화번호' ? 'w-[calc(100%-8.5rem)]' : 'w-full',
            checked || checked === -1
              ? 'border-[rgba(255,255,255,0.38)]'
              : 'border-red-500',
            'h-full rounded border bg-transparent pl-4 outline-none placeholder:text-sm'
          )}
        />

        {label === '전화번호' && (
          <div
            onClick={sendCode}
            className='ml-4 flex h-full w-[7.5rem] cursor-pointer items-center justify-center rounded border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.12)] text-sm transition-all hover:opacity-70'
          >
            {codeLoading ? (
              <svg
                role='status'
                className='h-6 w-6 animate-spin fill-[#00e7ff] text-gray-700'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            ) : (
              '인증번호 전송'
            )}
          </div>
        )}
      </div>
    </div>
  );
}
