'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';

const SearchField = () => {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('q') || '';

  const handleClick = () => {
    if (!composing) {
      location.href = `/search?q=${inputRef.current?.value}`;
    }
  };

  return (
    <div className='flex'>
      <div className='relative w-full'>
        <Input
          type='search'
          name='q'
          ref={inputRef}
          placeholder='タグを検索する'
          onKeyDown={_onEnter}
          onCompositionStart={startComposition}
          onCompositionEnd={endComposition}
          defaultValue={defaultQuery}
          className='pl-8' // アイコンの幅に応じて調整
        />
        <HiOutlineSearch className='absolute left-1.5 top-1/2 -translate-y-1/2 transform' />
      </div>
      <Button className='ml-4 bg-green-200 text-gray-500 duration-150 hover:bg-green-300' onClick={handleClick}>
        検索
      </Button>
    </div>
  );
};

export default SearchField;
