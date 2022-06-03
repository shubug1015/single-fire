import { Menu, Transition } from '@headlessui/react';
import { cls } from '@libs/client/utils';
import { Fragment } from 'react';

interface IProps {
  select: { label: string; value: string };
  option: any[];
  url?: (order: string) => void;
  setSelect: ({ label, value }: { label: string; value: string }) => void;
}

export default function Select({ select, option, url, setSelect }: IProps) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='flex h-12 w-36 items-center justify-between rounded bg-[#373c46] px-3 shadow-[0_5px_5px_0_rgba(0,0,0,0.2)] md:w-20'>
        <span>{select.label}</span>

        <svg
          width='10'
          height='5'
          viewBox='0 0 10 5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 0L5 5L10 0H0Z' fill='white' />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 mt-1 w-36 rounded bg-[#373c46] shadow-2xl outline-none'>
          <div className='divide-y divide-gray-600'>
            {option.map((i) => (
              <Menu.Item key={i.id}>
                <div
                  onClick={() => {
                    if (select.label !== i.label) {
                      setSelect({ label: i.label, value: i.value });
                      if (url) {
                        url(i.value);
                      }
                    }
                  }}
                  className={cls(
                    i.id === 0
                      ? 'rounded-t'
                      : i.id === option.length - 1
                      ? 'rounded-b'
                      : '',
                    select.label === i.label
                      ? ''
                      : 'cursor-pointer hover:bg-gray-600',
                    'px-4 py-4 text-sm transition-all'
                  )}
                >
                  {i.label}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
