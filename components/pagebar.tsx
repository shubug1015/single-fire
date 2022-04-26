import { useState, useEffect } from 'react';
import { cls } from '@libs/client/utils';

interface IProps {
  totalItems: number;
  currentPage: number;
  url: (page: number) => void;
}

const PAGE_LIST_LENGTH = 5;

const Pagebar = ({ totalItems, currentPage, url }: IProps) => {
  const maxPage = Math.ceil(totalItems / PAGE_LIST_LENGTH); // 마지막 페이지
  const quo = Math.floor(currentPage / PAGE_LIST_LENGTH); // 몫
  const rem = currentPage % PAGE_LIST_LENGTH; // 나머지
  const pageArray = [...Array(5)]
    .map((_, i) => PAGE_LIST_LENGTH * (rem === 0 ? quo - 1 : quo) + i + 1) // 나머지가 0일 경우에는 quo-1 처리
    .filter((i) => i <= maxPage);

  const [pageList, setPageList] = useState<number[]>([]);

  const nextPage = () => {
    setPageList((prev) =>
      prev.map((i) => i + PAGE_LIST_LENGTH).filter((i) => i <= maxPage)
    );
  };

  const prevPage = () => {
    const tmp = pageList[0] - 5;
    setPageList([...Array(5)].map((_, index) => index + tmp));
  };

  const firstPage = () => url(1);

  const lastPage = () => url(maxPage);

  useEffect(() => {
    setPageList(pageArray);
  }, [maxPage]);

  return totalItems > 0 ? (
    <div className='flex space-x-2'>
      {currentPage !== 1 && (
        <div
          onClick={firstPage}
          className='flex aspect-square w-8 cursor-pointer items-center justify-center rounded bg-[rgba(229,229,229,0.08)]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-2.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
            />
          </svg>
        </div>
      )}

      {!pageList.includes(1) && (
        <div
          onClick={prevPage}
          className='flex aspect-square w-8 cursor-pointer items-center justify-center rounded bg-[rgba(229,229,229,0.08)]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-2.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </div>
      )}

      {pageList.map((page) => (
        <div
          key={page}
          onClick={() => url(page)}
          className={cls(
            page === currentPage
              ? 'bg-[#009fb0] text-black'
              : 'bg-[rgba(229,229,229,0.08)]',
            'flex aspect-square w-8 cursor-pointer items-center justify-center rounded'
          )}
        >
          {page}
        </div>
      ))}

      {!pageList.includes(maxPage) && (
        <div
          onClick={nextPage}
          className='flex aspect-square w-8 cursor-pointer items-center justify-center rounded bg-[rgba(229,229,229,0.08)]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-2.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={3}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      )}

      {currentPage !== maxPage && (
        <div
          onClick={lastPage}
          className='flex aspect-square w-8 cursor-pointer items-center justify-center rounded bg-[rgba(229,229,229,0.08)]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-2.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13 5l7 7-7 7M5 5l7 7-7 7'
            />
          </svg>
        </div>
      )}
    </div>
  ) : null;
};

export default Pagebar;
