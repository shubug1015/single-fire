import Layout from '@layouts/sectionLayout';
import React, { useState } from 'react';
import Select from './select';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const slugs = router.query.slug as string[];
  const [orderType, setOrderType] = useState({
    label:
      (slugs[1] === 'created'
        ? '최신순'
        : slugs[1] === 'view_num'
        ? '조회순'
        : '좋아요순') || '최신순',
    value: slugs[1] || 'created',
  });
  const [searchType, setSearchType] = useState({
    label: (slugs[2] === 'title' ? '제목' : '작성자') || '제목',
    value: slugs[2] || 'title',
  });
  const [searchTerm, setSearchTerm] = useState(slugs[3] || '');

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setSearchTerm(value);
  };

  return (
    <Layout padding='pt-28 pb-6 md:pt-4'>
      <div className='flex justify-between'>
        <div className='flex space-x-4 md:text-sm'>
          <Select
            select={searchType}
            option={[
              {
                id: 0,
                label: '제목',
                value: 'title',
              },
              {
                id: 1,
                label: '작성자',
                value: 'user',
              },
            ]}
            setSelect={setSearchType}
          />

          <div className='flex space-x-4'>
            <input
              type='text'
              placeholder=''
              value={searchTerm}
              onChange={handleSearchTerm}
              className='h-12 w-80 border border-[#c8c8c8] pl-3 text-black outline-none md:w-40'
            />

            <div
              onClick={() =>
                searchTerm &&
                searchTerm.length > 0 &&
                router.push(
                  `/community/economy/${slugs[0]}/${orderType.value}/${searchType.value}/${searchTerm}`
                )
              }
              className='flex h-12 w-32 cursor-pointer items-center justify-center bg-black font-medium md:w-16'
            >
              검색
            </div>
          </div>
        </div>

        <div className='md:hidden'>
          <Select
            select={orderType}
            option={[
              {
                id: 0,
                label: '최신순',
                value: 'created',
              },
              {
                id: 1,
                label: '조회순',
                value: 'view_num',
              },
              {
                id: 2,
                label: '좋아요순',
                value: 'like_num',
              },
            ]}
            url={(order: string) =>
              router.push(
                `/community/economy/${slugs[0]}/${order}/${searchType.value}/${searchTerm}`
              )
            }
            setSelect={setOrderType}
          />
        </div>
      </div>
    </Layout>
  );
}
