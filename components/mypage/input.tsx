import { cls } from '@libs/client/utils';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  type: 'text' | 'tel' | 'password';
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  readOnly?: boolean;
}

export default function Input({
  type,
  label,
  register,
  error,
  readOnly,
}: IProps) {
  return (
    <div className='h-20 pt-7 md:pt-8 md:text-sm'>
      <div className='flex items-center'>
        <div className='w-44 font-medium opacity-60 md:w-24'>{label}</div>
        <input
          type={type}
          placeholder={label}
          {...register}
          readOnly={readOnly}
          className='bg-transparent outline-none md:w-32'
        />
      </div>

      <div className='flex items-center'>
        <div className='mt-2 text-sm text-red-500'>{error}</div>
      </div>
    </div>
  );
}
