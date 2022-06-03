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
    <div className='flex h-20 items-center'>
      <div className='w-44 font-medium opacity-60 md:w-24'>{label}</div>
      <input
        type={type}
        placeholder={label}
        {...register}
        readOnly={readOnly}
        className='bg-transparent outline-none'
      />

      <div className='mt-2 text-sm text-red-500'>{error}</div>
    </div>
  );
}
